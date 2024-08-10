import { hashPass } from "@/helpers/hashpassword"
import prisma from "@/prisma"
import { Request, Response } from "express"

export class AuthController {
      async createUserData(req: Request, res: Response) {
            try {
                  const newUser = await prisma.user.findFirst({
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

                  const createdUser = await prisma.user.create({ data: {...req.body, password} })

                  res.status(200).send({
                        status: 'Success created user',
                        data: createdUser,
                  })
            } catch (error) {
                  res.status(400).send({
                        status: "Failed created user",
                        msg: error
                  })
            }
      }
}