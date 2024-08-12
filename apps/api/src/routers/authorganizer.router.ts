
import { AuthOrganizerController } from "@/controllers/authorganizer.controller";
import { Router } from "express";

export class AuthOrganizerRouter {
      private router : Router;
      private authOrganizerController : AuthOrganizerController;

      constructor() {
            this.authOrganizerController = new AuthOrganizerController();
            this.router = Router();
            this.initializeRoutes();
      }

      private initializeRoutes(): void {
            this.router.post("/authorganizer", this.authOrganizerController.createEventOrganizerData)
            this.router.post("/login", this.authOrganizerController.loginEventOrganizerData)
            this.router.get("/verify/:token", this.authOrganizerController.verifyToken)
      }

      getRouter(): Router {
            return this.router;
      }
}