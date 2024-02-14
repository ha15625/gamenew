import { Router } from "express";
import { TouranamentController } from "../../controllers/TouranamentController";

class TournamentRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.post();
    this.get();
  }

  public post() {
    this.router.post("/create-tournament", TouranamentController.createTournament)
  }
  public get() {
    this.router.get(
      "/get-tournament",
      TouranamentController.getTouranament
    );
    this.router.get(
      "/get-tournament-detail/:id",
      TouranamentController.getTouranamentDetails
    );
  }
}

export default new TournamentRouter().router;
