import { TransactionController } from "@/controllers/transaction.controller";
import { checkRole, verifyToken } from "@/middlewares/auth.middleware";
import { Router } from "express";

export class TransactionRouter {
      private router : Router;
      private transactionController : TransactionController;

      constructor() {
            this.transactionController = new TransactionController;
            this.router = Router();
            this.initializeRoutes();
      }

      private initializeRoutes(): void {
            this.router.get("/transaction/:eventId", verifyToken,checkRole ,  this.transactionController.getTransactionData)
            this.router.post(`/transaction/:id`, verifyToken, this.transactionController.createTransactionData);
            this.router.post('/transaction/status', this.transactionController.updateStatusTransaction);
      }

      getRouter(): Router {
            return this.router;
      }
}