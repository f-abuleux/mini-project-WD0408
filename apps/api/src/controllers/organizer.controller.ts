import prisma from "@/prisma";
import { Request, Response } from "express";

export class OrganizerController {
      async getOrganizerData(req: Request, res: Response){
            try {
                  const organizerData = await prisma.eventOrganizer.findMany()
                  res.status(200).send({
                        status: 'Success get organizer data',
                        data: organizerData
                  })
            } catch (error) {
                  res.status(200).send({
                        status: 'Failed get organizer data',
                        msg: error
                  })
            }
      }

      async createUserData(req: Request, res: Response) {
            try {
                  const newUser = await prisma.eventOrganizer.findFirst({
                        where: {
                              OR: [
                                    { usernameCreator: req.body.username },
                                    { email: req.body.email }
                              ]
                        }
                  })
                  if (newUser?.usernameCreator === req.body.usernameCreator) throw 'Username already exist'
                  if (newUser?.email === req.body.email) throw 'Email already exist'

                  const createdUser = await prisma.eventOrganizer.create({
                        data: req.body
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
}