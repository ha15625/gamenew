import { Router } from "express";
import GoogleFitRouter from "./app/GoogleFitRouter";
import UserRouter from "./app/UserRouter";

class Routes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.app();
  }

  app() {
    this.router.use('/app/user', UserRouter);
    this.router.use('/app/google-api',GoogleFitRouter)
  }

}
export default new Routes().router;