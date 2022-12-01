// import { validate } from "../../helpers/ValidationHelper";
import * as Joi from "joi";
import { NextFunction } from "express";
// import { ReqInterface, ResInterface } from "../../interfaces/RequestInterface"
// import _RS from "../../helpers/ResponseHelper"
import { validate } from "../helpers/ValidationHelper";
import { ReqInterface, ResInterface } from "../interfaces/RequestInterface";

class UserValidation {
  static async loginValidation(
    req: ReqInterface,
    res: ResInterface,
    next: NextFunction
  ) {
    const schema = Joi.object().keys({
      phoneNumber: Joi.string()
        .required()
        .pattern(/^[0-9]+$/)
        .max(15)
        .min(9),
      countryCode: Joi.string().required(),
      name: Joi.string().optional(),
    });
    const isValid = await validate(req.body, res, schema);
    if (isValid) {
      next();
    }
  }
  static async signUpValidation(
    req: ReqInterface,
    res: ResInterface,
    next: NextFunction
  ) {
    const schema = Joi.object().keys({
      phoneNumber: Joi.string()
        .required()
        .pattern(/^[0-9]+$/)
        .max(15)
        .min(9),
      countryCode: Joi.string().required(),
      name: Joi.string().required(),
    });
    const isValid = await validate(req.body, res, schema);
    if (isValid) {
      next();
    }
  }
}

export default UserValidation;
