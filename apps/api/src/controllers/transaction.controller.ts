import prisma from "@/prisma";
import { Request, Response } from "express";

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

      async createTransactionData(req: Request, res: Response) {
            try {
                  const { quantitiy, price } = req.body
                  const transaction = await prisma.transaction.create({
                        data: {
                              quantitiy,
                              price,
                              finalprice : price * quantitiy,
                              userId: +req.params.userId,
                              eventId : req.body.eventId,
                              paymentlink: "",
                              proofpayment: "",

                        }
                  })
                  res.status(200).send({
                        status: "Success create transaction data",
                        msg: "Transaction data has been created",
                        transaction
                  })
            } catch (error) {
                  res.status(400).send({
                        status: "Failed create transaction data",
                        msg: error
                  })
            }
      }
}