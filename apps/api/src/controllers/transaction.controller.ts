import prisma from "@/prisma";
import axios from "axios";
import { Request, Response } from "express";
import { header } from "express-validator";

export class TransactionController {
      async getTransactionData(req: Request, res: Response) {
            try {
                  const transactionData = await prisma.transaction.findMany()
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
                  const { quantitiy, price } = req.body
                  console.log(req.user)
                  const transaction = await prisma.transaction.create({
                        data: {
                              quantitiy,
                              price,
                              finalprice: price * quantitiy,
                              userId: req.user?.id!,
                              eventId: req.body.eventId,
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
                              duration: 1
                        }
                  }

                  const midTrans = await axios.post("https://app.sandbox.midtrans.com/snap/v1/transactions", data,
                        {
                              headers: {
                                    Authorization: "Basic U0ItTWlkLXNlcnZlci0wX3B6VFUteWtBTlllVi1RZ1QzZG42Z3g6"
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
                        await prisma.transaction.update({
                              data: { status: "paid" },
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
}