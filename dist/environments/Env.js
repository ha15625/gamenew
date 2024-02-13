"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
function env() {
    return {
        nodeEnv: process.env.NODE_ENV,
        dbUrl: process.env.DB_URL,
        googleAccessToken: process.env.GOOGLE_ACCESS_TOKEN,
        baseUrl: process.env.BASE_URL
    };
}
exports.env = env;
