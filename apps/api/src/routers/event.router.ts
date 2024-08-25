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
            this.router.get(`/events`, verifyToken, this.eventController.getEventById)
            this.router.get("/events/paid",  this.eventController.getEventPaid)
            this.router.get("/events/free",  this.eventController.getEventFree)
            this.router.get("/eventdetails/:id", verifyToken,  this.eventController.getDetailEvent)
            this.router.post("/paid", verifyToken, checkRole, uploader("event", "/event").single("image"), this.eventController.createEventPaid)
            this.router.post("/free", verifyToken, checkRole, uploader("event", "/event").single("image"), this.eventController.createEventFree)
            // this.router.get("/event", this.eventController.getEvent)

      }
      
      getRouter(): Router {
            return this.router;
      }
}