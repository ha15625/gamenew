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
        this.router.post("/create-tournament", TouranamentController_1.TouranamentController.createTournament);
        this.router.post("/join-tournament", TouranamentController_1.TouranamentController.joinTournament);
    }
    get() {
        this.router.get("/get-tournament", TouranamentController_1.TouranamentController.getTouranament);
        this.router.get("/get-tournament-detail/:id", TouranamentController_1.TouranamentController.getTouranamentDetails);
        this.router.get("/get-tournament-player/:playerId", TouranamentController_1.TouranamentController.getPlayerTournament);
    }
}
exports.default = new TournamentRouter().router;
