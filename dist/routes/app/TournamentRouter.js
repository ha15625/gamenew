"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TouranamentController_1 = require("../../controllers/TouranamentController");
class TournamentRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.post();
        this.get();
    }
    post() {
    }
    get() {
        this.router.get("/get-tournament", TouranamentController_1.TouranamentController.getTouranament);
        this.router.get("/get-tournament-detail/:id", TouranamentController_1.TouranamentController.getTouranamentDetails);
    }
}
exports.default = new TournamentRouter().router;