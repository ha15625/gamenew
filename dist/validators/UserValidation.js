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
// import { validate } from "../../helpers/ValidationHelper";
const Joi = require("joi");
// import { ReqInterface, ResInterface } from "../../interfaces/RequestInterface"
// import _RS from "../../helpers/ResponseHelper"
const ValidationHelper_1 = require("../helpers/ValidationHelper");
class UserValidation {
    static loginValidation(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = Joi.object().keys({
                phoneNumber: Joi.string()
                    .required()
                    .pattern(/^[0-9]+$/)
                    .max(15)
                    .min(9),
                countryCode: Joi.string().required(),
                name: Joi.string().optional(),
            });
            const isValid = yield (0, ValidationHelper_1.validate)(req.body, res, schema);
            if (isValid) {
                next();
            }
        });
    }
    static signUpValidation(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = Joi.object().keys({
                phoneNumber: Joi.string()
                    .required()
                    .pattern(/^[0-9]+$/)
                    .max(15)
                    .min(9),
                countryCode: Joi.string().required(),
                name: Joi.string().required(),
            });
            const isValid = yield (0, ValidationHelper_1.validate)(req.body, res, schema);
            if (isValid) {
                next();
            }
        });
    }
}
exports.default = UserValidation;
