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


}