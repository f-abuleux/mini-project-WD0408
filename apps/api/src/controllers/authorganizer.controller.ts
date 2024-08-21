import { createToken } from "@/helpers/createToken"
import { hashPass } from "@/helpers/hashpassword"
import prisma from "@/prisma"
import { compare } from "bcrypt"
import { Request, Response } from "express"
import path from 'path'
import fs from 'fs'
import handlebars from "handlebars"
import { transporter } from "@/helpers/nodemailer"
import jwt from 'jsonwebtoken'

export class AuthOrganizerController {
      async createEventOrganizerData(req: Request, res: Response) {
            try {
                  const newUser = await prisma.eventOrganizer.findFirst({
                        where: {
                              OR: [
                                    { username: req.body.username },
                                    { email: req.body.email }
                              ]
                        }
                  })
                  if (newUser?.username === req.body.username) throw 'Username already exist'
                  if (newUser?.email === req.body.email) throw 'Email already exist'

                  const password = await hashPass(req.body.password)

                  const createdUser = await prisma.eventOrganizer.create({ data: { ...req.body, password } })
                  const token = createToken({ id: createdUser.id, role: createdUser.role }, '365d')

                  const templatePath = path.join(__dirname, '../templates', "verify.hbs")
                  const templateSource = fs.readFileSync(templatePath, 'utf-8').toString()
                  const compiledTemplate = handlebars.compile(templateSource)
                  const html = compiledTemplate({
                        username: req.body.username,
                        link: `http://localhost:3000/verifyeventorganizer/${token}`
                  })
                  console.log(token)

                  await transporter.sendMail({
                        from: process.env.MAIL_USER,
                        to: req.body.email,
                        subject: 'EventUs - Verify your account - Welcome to EventUs',
                        html
                  })

                  res.status(200).send({
                        status: 'Success created user',
                        data: createdUser
                  })
            } catch (error) {
                  res.status(400).send({
                        status: "Failed created user",
                        msg: error
                  })
            }
      }

      async loginEventOrganizerData(req: Request, res: Response) {
            try {
                  const user = await prisma.eventOrganizer.findFirst({
                        where: {
                              OR: [
                                    { username: req.body.username },
                                    { email: req.body.username }
                              ]
                        }
                  })
                  // console.log(user)

                  if (!user) throw 'User not found'
                  if (!user.isVerify) throw 'User not verified'

                  const isValidPass = await compare(req.body.password, user.password)
                  if (!isValidPass) throw 'Incorrect password'

                  const token = createToken({ id: user.id, role: user.role }, "1d")


                  res.status(200).send({
                        status: 'ok',
                        msg: 'Success login user',
                        token,
                        eventOrganizer: user
                  })
            } catch (error) {
                  res.status(400).send({
                        status: 'Failed login user',
                        msg: error
                  })
            }
      }

      async verifyToken(req: Request, res: Response) {
            const { token } = req.params
            try {
                  jwt.verify(token, process.env.SECRET_KEY!, async (err, user) => {
                        if (err) {
                              res.status(400).send("Invalid token")
                        } else {
                              const verifiedUser = await prisma.eventOrganizer.update({
                                    where: {
                                          id: (user as { id: number }).id
                                    },
                                    data: {
                                          isVerify: true
                                    }
                              })
                              res.status(200).send({
                                    status: 'Success verify user',
                                    data: { isVerified: true }
                              })
                        }
                  })
            } catch (error) {
                  res.status(400).send({
                        status: 'error',
                        msg: error
                  })
            }
      }

}

