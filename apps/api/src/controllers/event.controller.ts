import prisma from "@/prisma";
import { Request, Response } from "express";

const baseUrl = 'https://localhost:8000/api'

export class Event {
      //Pakai middleware apakah role admin
      async createEventPaid(req: Request, res: Response) {
            try {
                  let image = null
                  if(req.file){
                        image = `${baseUrl}/public/event/${req.file?.filename}`
                  }
                  const newEvent = await prisma.event.create({
                        data: {
                              name: req.body.name,
                              description: req.body.description,
                              price: req.body.price,
                              date: req.body.date,
                              seat: req.body.seat,
                              location: req.body.location,
                              tickettype: "paid",
                              image: image,
                              category: req.body.category,
                              eventOrganizerId: +req.params.userId,
                        }
                  })

                  res.status(200).send({
                        status: 'Success created event',
                        data: newEvent
                  })
            } catch (error) {
                  res.status(400).send({
                        status: 'Failed created event',
                        msg: error
                  })
            }
      }

      async createEventFree(req: Request, res: Response) {
            try {
                  let image = null
                  if(req.file){
                        image = `${baseUrl}/public/event/${req.file?.filename}`
                  }
                  const newEvent = await prisma.event.create({
                        data: {
                              name: req.body.name,
                              description: req.body.description,
                              price: 0,
                              date: req.body.date,
                              seat: req.body.seat,
                              location: req.body.location,
                              tickettype: "free",
                              image: image,
                              category: req.body.category,
                              eventOrganizerId: +req.params.userId

                        }
                  })
                  res.status(200).send({
                        status: 'Success created event',
                        data: newEvent
                  })
            } catch (error) {
                  res.status(400).send({
                        status: 'Failed created event',
                        msg: error
                  })
            }
      }

      // async getEvent(req : Request, res : Response) {
      //       try {
      //             const event = await prisma.event.findMany()
      //             res.status(200).send({
      //                   status: "Success get event",
      //                   data: event
      //             })
      //       } catch (error) {
      //             res.status(400).send({
      //                   status: 'Failed get event',
      //                   msg: error
      //             })
      //       }
      // }

      async getEvent(req: Request, res: Response) {
            try {
                  const event = await prisma.event.findMany({
                        select: {
                              id: true,
                              name: true,
                              description: true,
                              price: true,
                              date: true,
                              seat: true,
                              location: true,
                              tickettype: true,
                              image: true,
                              category: true,
                              eventOrganizerId: true,
                              eventorganizer:{
                                    select: {
                                          id: true,
                                          username: true,
                                          email: true,
                                          phonenumber: true,
                                    }
                              }
                        },
                        orderBy: {
                              date: 'asc'
                        }
                  })    
                  res.status(200).send({
                        status: "Success get event",
                        data: event
                  })
            } catch (error) {
                  res.status(400).send({
                        status: 'Failed get event',
                        msg: error
                  })
            }
      }
}