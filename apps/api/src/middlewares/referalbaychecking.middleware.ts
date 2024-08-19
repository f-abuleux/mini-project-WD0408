import prisma from "@/prisma"
import { NextFunction, Request, Response } from "express"

export const referalBayChecking = async (req: Request, res: Response, next: NextFunction) => {
      const referalChecking = await prisma.user.findFirst({
            where: {
                  referalcode : req.body.referalcode
            }
      })
      console.log(referalChecking)
      next()
}