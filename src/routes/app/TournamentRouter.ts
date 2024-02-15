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
    this.router.post("/create-tournament", TouranamentController.createTournament);

    this.router.post("/join-tournament",TouranamentController.joinTournament)
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
    this.router.get(
      "/get-tournament-player/:playerId",
      TouranamentController.getPlayerTournament
    );
  }
}

export default new TournamentRouter().router;
