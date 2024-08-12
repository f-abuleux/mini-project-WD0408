import { AuthController } from "@/controllers/auth.controller";
import { Router } from "express";

export class AuthRouter {
      private router : Router;
      private authController : AuthController;

      constructor() {
            this.authController = new AuthController();
            this.router = Router();
            this.initializeRoutes();
      }

      private initializeRoutes(): void {
            this.router.post("/authuser", this.authController.createUserData)
            this.router.post("/login", this.authController.loginUserData)
            this.router.get("/verify/:token", this.authController.verifyToken)

      }

      getRouter(): Router {
            return this.router;
      }
}