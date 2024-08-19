import { Event } from "@/controllers/event.controller";
import { uploader } from "@/helpers/uploader";
import { checkRole, verifyToken } from "@/middlewares/auth.middleware";
import { Router } from "express";

export class EventRouter {
      private router: Router;
      private eventController: Event;

      constructor() {
            this.eventController = new Event()
            this.router = Router();
            this.initializeRoutes();
      }

      private initializeRoutes(): void {
            this.router.post("/paid/:userId", verifyToken, uploader("event", "/event").single("image"), this.eventController.createEventPaid)
            this.router.post("/free/:userId", verifyToken, uploader("event", "/event").single("image"), this.eventController.createEventFree)
            // this.router.get("/event", this.eventController.getEvent)
            this.router.get("/events", verifyToken, checkRole, this.eventController.getEvent)

      }
      
      getRouter(): Router {
            return this.router;
      }
}