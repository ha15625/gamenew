import { Router } from "express";

class Routes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.app();
  }

  app() {

  }

}
export default new Routes().router;