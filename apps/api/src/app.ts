import express, {
  json,
  urlencoded,
  Express,
  Request,
  Response,
  NextFunction,
  Router,
} from 'express';
import cors from 'cors';
import { PORT } from './config';
import { SampleRouter } from './routers/sample.router';
import { UserRouter } from './routers/user.router';
import { OragnizerRouter } from './routers/organizer.router';
import { AuthRouter } from './routers/auth.router';
import { AuthOrganizerRouter } from './routers/authorganizer.router';
import exphbs from "express-handlebars";
import { EventRouter } from './routers/event.router';
import { TransactionRouter } from './routers/transaction.router';
import path from 'path';


export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }
  
  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use('/api/public', express.static(path.join(__dirname, "../public")));
  }

  private handleError(): void {
    // not found
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes('/api/')) {
        res.status(404).send('Not found !');
      } else {
        next();
      }
    });

    // error
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (req.path.includes('/api/')) {
          console.error('Error : ', err.stack);
          res.status(500).send('Error !');
        } else {
          next();
        }
      },
    );
  }

  private routes(): void {
    const sampleRouter = new SampleRouter();
    const userRouter = new UserRouter();
    const organizerRouter = new OragnizerRouter();
    const authRouter = new AuthRouter();
    const authOrganizerRouter = new AuthOrganizerRouter();
    const eventRouter = new EventRouter()
    const transactionRouter = new TransactionRouter()

    this.app.get('/api', (req: Request, res: Response) => {
      res.send(`Hello, Purwadhika Student API!`);
    });

    this.app.use('/api/samples', sampleRouter.getRouter());
    this.app.use("/api/users", userRouter.getRouter()); 
    this.app.use("/api/organizers", organizerRouter.getRouter());
    this.app.use("/api/auth",  authRouter.getRouter());
    this.app.use("/api/authorganizer", authOrganizerRouter.getRouter())
    this.app.use("/api/event", eventRouter.getRouter())
    this.app.use('/api/checkouts', transactionRouter.getRouter())
    // const hbs = exphbs.create({ extname: '.hbs' });
    // this.app.engine('hbs', hbs.engine);
    // this.app.set("view engine", "hbs");
    // this.app.set("views", "views");
  }

  public start(): void {

    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
    });
  }
}
