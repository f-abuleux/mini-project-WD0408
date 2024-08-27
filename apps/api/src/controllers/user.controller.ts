import { referalCodeGenerator } from "@/helpers/referalcodegenerator";
import prisma from "@/prisma";
import { Request, Response } from "express";

export class UserController {
      async getUserData(req: Request, res: Response) {
            try {
                  const userData = await prisma.user.findUnique({
                        where: {
                              id: req.user?.id
                        }
                  })
                  console.log(userData)
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

      async reviewEventbyUser(req: Request, res: Response) {
            try {
                  
                  const transaction = await prisma.transaction.findMany({
                        where: {
                              userId: req.user?.id,
                              status: "paid"
                        }, include: {
                              event: true
                        }, orderBy : {
                              createdAd : 'desc'
                        }
                  })
                  res.status(200).send({
                        status: 'Success get user data',
                        data: transaction
                  })

            } catch (error) {
                  res.status(400).send({
                        status: 'Failed get user data',
                        msg: error
                  })
            }
      }
      async canReveiwEventbyUser(req: Request, res: Response) {
            try {
                  const transaction = await prisma.transaction.findMany({
                        where: {
                              userId: req.user?.id,
                              status: "paid"
                        }, include: {
                              event: true
                        }, orderBy : {
                              createdAd : 'desc'
                        }
                  })
                  const event = await prisma.event.findMany({
                        where: {
                              date: {
                                    gte: new Date(transaction[0].event.date)
                              }
                        }
                  })
                  const review = await prisma.review.findUnique({
                        where:{
                              eventId: event[0].id
                        }
                  })
                  const reviewEvent = await prisma.review.create({
                        data: {
                              eventId: review?.eventId as number,
                              userId: req.user!.id,
                              rating: req.body.rating,
                              review: req.body.review
                        }
                  })
                  res.status(200).send({
                        status: 'Success get user data',
                        data: reviewEvent
                  })

            } catch (error) {
                  res.status(400).send({
                        status: 'Failed get user data',
                        msg: error
                  })
            }
      }
}