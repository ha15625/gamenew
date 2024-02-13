"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRouter_1 = require("./app/UserRouter");
const TournamentRouter_1 = require("./app/TournamentRouter");
class Routes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.app();
    }
    app() {
        this.router.use('/app/user', UserRouter_1.default);
        this.router.use('/app/tournament', TournamentRouter_1.default);
    }
}
exports.default = new Routes().router;
