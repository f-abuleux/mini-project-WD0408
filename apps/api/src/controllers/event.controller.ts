import prisma from "@/prisma";
import { Request, Response } from "express";

const baseUrl = 'https://localhost:8000/api'

export class Event {
      //Pakai middleware apakah role admin
      async createEventPaid(req: Request, res: Response) {
            try {
                  console.log(req.body)

                  let image = null
                  if (req.file) {
                        image = `${baseUrl}/public/event/${req.file?.filename}`
                  }
                  const newEvent = await prisma.event.create({
                        data: {
                              name: req.body.name,
                              description: req.body.description,
                              price: +req.body.price,
                              date: req.body.date,
                              seat: +req.body.seat,
                              location: req.body.location,
                              tickettype: "paid",
                              image: image,
                              category: req.body.category,
                              eventOrganizerId: req.user?.id!,
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
                  console.log(req.body)

                  let image = null
                  if (req.file) {
                        image = `${baseUrl}/public/event/${req.file?.filename}`
                  }
                  const newEvent = await prisma.event.create({
                        data: {
                              name: req.body.name,
                              description: req.body.description,
                              price: +0,
                              date: req.body.date,
                              seat: +req.body.seat,
                              location: req.body.location,
                              tickettype: "free",
                              image: image,
                              category: req.body.category,
                              eventOrganizerId: req.user?.id!,
                        }
                  })

                  res.status(200).send({
                        status: 'Success create event',
                        data: newEvent
                  })
            } catch (error) {
                  res.status(400).send({
                        status: 'Failed create event',
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

      async getEventPaid(req: Request, res: Response) {
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
                              eventorganizer: {
                                    select: {
                                          id: true,
                                          username: true,
                                          email: true,
                                          phonenumber: true,
                                    }
                              }
                        },
                        orderBy: { date: 'asc', },
                        where: { tickettype: 'paid' }
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

      async getEventFree(req: Request, res: Response) {
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
                              eventorganizer: {
                                    select: {
                                          id: true,
                                          username: true,
                                          email: true,
                                          phonenumber: true,
                                    }
                              }
                        },
                        orderBy: { date: 'asc', },
                        where: { tickettype: 'free' }
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

      async getEventById(req: Request, res: Response) {
            try {
                  console.log(req.user?.id)
                  console.log(req.params.id)
                  const event = await prisma.event.findMany({
                        where: {
                              id: +req.user?.id!
                        },
                        select: {
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
                              eventorganizer: {
                                    select: {
                                          id: true,
                                          username: true,
                                          email: true,
                                          phonenumber: true,
                                    }
                              }
                        }
                  })

                  
                  res.status(200).send({
                        status: 'Success get event by id',
                        data: event
                  })
            } catch (error) {
                  res.status(400).send({
                        status: 'Failed get event by id',
                        msg: error
                  })
            }
      }

      async getEvent(req: Request, res: Response) {
            try {
                  type Category = "music" | "film" | "game";
                  type Filter = { AND: any[] };
                  const limit = 3
                  const page = req.query.page
                  const pages: number = req.query.pages ? +req.query.pages : 1
                  const search = req.query.search || ""
                  const category = req.query.category || ""
                  const location = req.query.location || ""
                  const filter: Filter = {
                        AND: [{ name: { contains: search as string } }]
                  }
                  if (category) {
                        filter.AND.push({ category: category as Category })
                  }
                  if (location) {
                        filter.AND.push({ location: location as string })
                  }
                  const event = await prisma.event.findMany({
                        orderBy: { date: 'desc' },
                        where: filter,
                        skip: (pages - 1) * limit,
                        take: limit
                  })
                  res.status(200).send({
                        status: 'ok',
                        event,
                  });
            } catch (error) {
                  res.status(400).send({
                        status: "Failed Get Event",
                        msg: error
                  })
            }
      }

      // async getEventByUser(req: Request, res: Response){
      //       try {
      //             const event = await prisma.transaction.
      //       } catch (error) {
      //             res.status(400).send({
      //                   status: "Failed Get Event By User",
      //                   msg: error
      //             })
      //       }
      // }
}