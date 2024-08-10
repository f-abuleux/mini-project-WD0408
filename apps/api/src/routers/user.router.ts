import { UserController } from "@/controllers/user.controller";
import { Router } from "express";

export class UserRouter {
      private router : Router;
      private userController : UserController

      constructor() {
            this.userController = new UserController();
            this.router = Router();
            this.initializeRoutes();
      }

      private initializeRoutes(): void {
            this.router.get("/", this.userController.getUserData)
            this.router.post("/login", this.userController.loginUserData)
      }

      getRouter(): Router {
            return this.router;
      }
}