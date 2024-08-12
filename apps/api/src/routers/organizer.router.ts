import { OrganizerController } from "@/controllers/organizer.controller";
import { Router } from "express";

export class OragnizerRouter {
      private router: Router;
      private organizerController : OrganizerController;


      constructor() {
            this.organizerController = new OrganizerController();
            this.router = Router();
            this.initializeRoutes();
      }

      private initializeRoutes() : void {
            this.router.get("/", this.organizerController.getOrganizerData)
      }

      getRouter() : Router {
            return this.router;
      }
}