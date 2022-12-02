import { Router } from "express";
import { GoogleFitController } from "../../controllers/GoogleFitController";

class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.post();
    this.get();
  }

  public post() {
    this.router.post(
      "/create-data-source",
      GoogleFitController.createDataSource
    );
    this.router.post(
      "/aggregate-data-source",
      GoogleFitController.aggregateDataSource
    );
  }
  public get() {
    this.router.get(
        "/get-data-source",
        GoogleFitController.getDataSource
      );
  }
}

export default new UserRouter().router;
