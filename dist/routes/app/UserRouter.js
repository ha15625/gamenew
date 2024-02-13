"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../../controllers/UserController");
const UserValidation_1 = require("../../validators/UserValidation");
class UserRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.post();
        this.get();
    }
    post() {
        this.router.post("/login", UserValidation_1.default.loginValidation, UserController_1.UserController.login);
        this.router.post("/sign-up", UserValidation_1.default.signUpValidation, UserController_1.UserController.signUp);
    }
    get() { }
}
exports.default = new UserRouter().router;
