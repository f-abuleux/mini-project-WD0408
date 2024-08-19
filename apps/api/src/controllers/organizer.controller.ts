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


}