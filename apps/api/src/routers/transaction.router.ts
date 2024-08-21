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
            this.router.post(`/transaction`, verifyToken, this.transactionController.createTransactionData);
            this.router.post('/transaction/status', this.transactionController.updateStatusTransaction);
      }

      getRouter(): Router {
            return this.router;
      }
}