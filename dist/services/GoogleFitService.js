"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = require("../environments/Env");
const axios = require('axios').default;
class GoogleFitnessService {
    constructor() {
    }
    getDataSource() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accessToken = yield this.getAccessToken();
                const url = `${(0, Env_1.env)().baseUrl}dataSources`;
                const res = yield axios.get(url, {
                    headers: {
                        "Authorization": `Bearer ${accessToken}`
                    }
                });
                if (res === null || res === void 0 ? void 0 : res.data) {
                    return res === null || res === void 0 ? void 0 : res.data;
                }
                else {
                    return [];
                }
            }
            catch (err) {
                console.log('GoogleFitness', err.message);
                let statusCode = 403;
                return statusCode;
            }
        });
    }
    createDataSource(data = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accessToken = yield this.getAccessToken();
                const url = `${(0, Env_1.env)().baseUrl}dataSources`;
                const res = yield axios.post(url, data, {
                    headers: {
                        "Authorization": `Bearer ${accessToken}`
                    }
                });
                if (res === null || res === void 0 ? void 0 : res.data) {
                    return res === null || res === void 0 ? void 0 : res.data;
                }
                else {
                    return [];
                }
            }
            catch (err) {
                console.log('GoogleFitness', err.message);
                let statusCode = 403;
                return statusCode;
            }
        });
    }
    aggregateDataSource(data = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accessToken = yield this.getAccessToken();
                const url = `${(0, Env_1.env)().baseUrl}dataset:aggregate`;
                const res = yield axios.post(url, data, {
                    headers: {
                        "Authorization": `Bearer ${accessToken}`
                    }
                });
                if (res === null || res === void 0 ? void 0 : res.data) {
                    return res === null || res === void 0 ? void 0 : res.data;
                }
                else {
                    return [];
                }
            }
            catch (err) {
                console.log('GoogleFitness', err.message);
                let statusCode = 403;
                return statusCode;
            }
        });
    }
    /**
     * This method is used to get access token of a perticular restaurant.
     * @returns
     */
    getAccessToken() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let accessToken = (0, Env_1.env)().googleAccessToken;
                return accessToken;
            }
            catch (error) {
                console.log('catch_error_getAccessToken');
            }
        });
    }
}
let respObj = new GoogleFitnessService();
exports.default = respObj;
