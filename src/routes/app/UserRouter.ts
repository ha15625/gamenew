import { Router } from "express";
import { UserController } from "../../controllers/UserController";
import UserValidation from "../../validators/UserValidation";

class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.post();
    this.get();
  }

  public post() {
    this.router.post(
      "/login",
      UserValidation.loginValidation,
      UserController.login
    );
    this.router.post(
      "/sign-up",
      UserValidation.signUpValidation,
      UserController.signUp
    );
  }
  public get() {}
}

export default new UserRouter().router;
