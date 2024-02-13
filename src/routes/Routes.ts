import { Router } from "express";
import UserRouter from "./app/UserRouter";
import TournamentRouter from "./app/TournamentRouter";

class Routes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.app();
  }

  app() {
    this.router.use('/app/user', UserRouter);
    this.router.use('/app/tournament', TournamentRouter);
  }

}
export default new Routes().router;