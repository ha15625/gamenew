import { Router } from "express";
import AuthRouter from "./app/AuthRouter";
import LookupRouter from "./app/LookupRouter";

class Routes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.app();
  }

  app() {
    this.router.use('/app/auth', AuthRouter);
    this.router.use('/app/Lookup',LookupRouter);
  }

}
export default new Routes().router;