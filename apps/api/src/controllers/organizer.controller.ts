import prisma from "@/prisma";
import { Request, Response } from "express";

export class OrganizerController {
      async getOrganizerData(req: Request, res: Response){
            try {
                  const organizerData = await prisma.eventOrganizer.findUnique({
                        where: {
                              id: req.user?.id
                        }
                  })
                  console.log(organizerData)
                  res.status(200).send({
                        status: 'Success get event organizer data',
                        data: organizerData
                  })
            } catch (error) {
                  res.status(400).send({
                        status: 'Failed get event organizer data',
                        msg: error
                  })
            }
      }
}