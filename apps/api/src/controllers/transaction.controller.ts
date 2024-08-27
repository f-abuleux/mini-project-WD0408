import prisma from "@/prisma";
import axios from "axios";
import e, { Request, Response } from "express";


export class TransactionController {
      async getTransactionData(req: Request, res: Response) {
            try {
                  const transactionData = await prisma.transaction.findMany({
                        where: {
                              eventId: req.user?.id,
                              status : "paid"
                        }, select : {
                              createdAd : true,
                              finalprice : true,
                              quantitiy : true,
                        }
                  })
                  res.status(200).send({
                        status: "Success get transaction data",
                        data: transactionData
                  })
            } catch (error) {
                  res.status(400).send({
                        status: "Failed get transaction data",
                        msg: error
                  })
            }
      }

      //U0ItTWlkLXNlcnZlci0wX3B6VFUteWtBTlllVi1RZ1QzZG42Z3g6


      async createTransactionData(req: Request, res: Response) {
            try {
                  const event = await prisma.event.findFirst({
                        where: {
                              id: Number(req.params.id)
                        }
                  })

                  const promotion = await prisma.promotion.findFirst({
                        where: {
                              voucherdiscount: req.body.voucherdiscount
                        }
                  })

                  // if (!promotion) throw new Error("Voucher not found");
                  // if (promotion.voucherdiscount !== req.body.voucherdiscount) throw new Error("Voucher not found");
                  // if (promotion.startdate > new Date()) throw new Error("Voucher has not started yet");
                  // if (promotion.enddate < new Date()) throw new Error("Voucher has been expired");
                  // if (promotion.quota == 0) throw new Error("Voucher already empty");
                  // if (req.body.voucherdiscount == '') {
                  //       promotion.percentage = 0
                  // }

                  // if (!event) {
                  //       res.status(400).send({
                  //             status: "Failed create transaction data",
                  //             msg: "Event not found"
                  //       })
                  // }

                  // if (user?.point! < 1000) {
                  //       res.status(400).send({
                  //             status: "Failed create transaction data",
                  //             msg: "You don't have enough point, you need at least 1000 point"
                  //       })
                  // }

                  const transaction = await prisma.transaction.create({
                        data: {
                              //+ DISC 10% - -POINT
                              quantitiy: req.body.quantitiy,
                              price: event?.price,
                              finalprice: req.body.quantitiy * event?.price!
                              // * promotion.percentage/100
                              ,
                              userId: req.user?.id!,
                              eventId: Number(event?.id),
                              paymentlink: "",
                              proofpayment: "",
                        }
                  })


                  let data = {
                        transaction_details: {
                              order_id: transaction.id,
                              gross_amount: transaction.finalprice
                        },
                        expiry: {
                              unit: "minutes",
                              duration: 5
                        }
                  }

                  const midTrans = await axios.post("https://app.sandbox.midtrans.com/snap/v1/transactions", data,
                        {
                              headers: {
                                    Authorization: "Basic  U0ItTWlkLXNlcnZlci0wX3B6VFUteWtBTlllVi1RZ1QzZG42Z3g6"
                                    // U0ItTWlkLXNlcnZlci0wX3B6VFUteWtBTlllVi1RZ1QzZG42Z3g6
                              }
                        })

                  const midTransData = await midTrans.data

                  await prisma.transaction.update({
                        data: {
                              paymentlink: midTransData.redirect_url
                        },
                        where: {
                              id: transaction.id
                        }
                  })

                  res.status(200).send({
                        status: "Success create transaction data",
                        msg: "Transaction data has been created",
                        transaction,
                        data: midTransData
                  })
            } catch (error) {
                  res.status(400).send({
                        status: "Failed create transaction data",
                        msg: error
                  })
            }
      }


      async updateStatusTransaction(req: Request, res: Response) {
            try {
                  const { transaction_status, order_id } = req.body
                  console.log(req.body)

                  if (transaction_status == "settlement") {
                        const done =  await prisma.transaction.update({
                              data: { status: "paid" },
                              where: { id: +order_id }
                        })
                        await prisma.event.update({
                              data: { seat: { decrement: done.quantitiy } },
                              where: { id: +order_id }
                        })
                  }

                  if (transaction_status == "cancel") {
                        await prisma.transaction.update({
                              data: { status: "declined" },
                              where: { id: +order_id }
                        })
                  }

                  if (transaction_status == "expire") {
                        await prisma.transaction.update({
                              data: { status: "declined" },
                              where: { id: +order_id }
                        })
                  }
                  res.status(200).send({
                        status: "Success update status transaction",
                        msg: "Transaction data has been updated"
                  })
            } catch (error) {
                  console.log(error)
                  res.status(400).send({
                        status: "Failed update status transaction",
                        msg: error
                  })
            }
      }

      async getAllTransaction(req: Request, res: Response) {
            try {
                  const transactionData = await prisma.transaction.findMany({
                        where: {
                              id: req.user?.id,
                        },
                        include: {
                              user: true,
                              event: true
                        }
                  })
                  res.status(200).send({
                        status: "Success get transaction data",
                        data: transactionData
                  })
            } catch (error) {
                  res.status(400).send({
                        status: "Failed get transaction data",
                        msg: error
                  })
            }
      }

      async getTransactionByDay(req: Request, res: Response){
            try {
                  const transactionData = await prisma.transaction.aggregate({
                        where: {
                              AND: [
                                    {
                                          createdAd: {
                                                gte: new Date(req.body.start)
                                          }
                                    },
                                    {
                                          createdAd: {
                                                lte: new Date(req.body.end)
                                          }
                                    },
                                    {
                                          status: "paid"
                                    }
                              ]
                        },
                        _sum: {
                              finalprice: true
                        }
                  })
            } catch (error) {
                  res.status(400).send({
                        status: "Failed get transaction data",
                        msg: error
                  })
            }
      }
}