import { referalCodeGenerator } from "@/helpers/referalcodegenerator";
import prisma from "@/prisma";
import { Request, Response } from "express";

export class UserController {
      async getUserData(req: Request, res: Response) {
            try {
                  const userData = await prisma.user.findMany()
                  res.status(200).send({
                        status: 'Success get user data',
                        data: userData
                  })
            } catch (error) {
                  res.status(400).send({
                        status: 'Failed get user data',
                        msg: error
                  })
            }
      }



      async loginUserData(req: Request, res: Response) {
            try {
                  const user = await prisma.user.findFirst({
                        where: {
                              OR: [
                                    { username: req.body.data },
                                    { email: req.body.data }
                              ]
                        }
                  })
                  // console.log(user)

                  if (!user) throw 'User not found'
                  if (!user.isVerify) throw 'User not verified'
                  if (user.password !== req.body.password) throw 'Password not match'

                  res.status(200).send({
                        status: 'Success login user',
                        user
                  })
            } catch (error) {
                  res.status(400).send({
                        status: 'Failed login user',
                        msg: error
                  })
            }
      }
}