import User from "../models/User";
import Attempt from "../models/Attempts";
import _RS from "../helpers/ResponseHelper";

export class UserController {
  static async login(req, res, next) {
    const startTime = new Date().getTime();
    const { phoneNumber, countryCode } = req.body;
    try {
      let isUserExist = await User.findOne({
        $and: [{ phoneNumber: phoneNumber }, { countryCode: countryCode }],
      });
      let attempt = await Attempt.findOne();
      if (!isUserExist) {
        attempt.wrongAttempt += 1;
        attempt.save();
        return _RS.unAuthenticated(
          res,
          "UNAUTHORIZE",
          "User not exist , go to signup page",
          isUserExist,
          startTime,
          attempt.wrongAttempt
        );
      }
      attempt.rightAttempt += 1;
      attempt.save();
      return _RS.ok(
        res,
        "SUCCESS",
        "Login successfully , go to dashboad page",
        isUserExist,
        startTime
      );
    } catch (err) {
      next(err);
    }
  }

  static async signUp(req, res, next) {
    const startTime = new Date().getTime();
    const { phoneNumber, userName, countryCode } = req.body;
    try {
      let user = await User.findOne({
        $and: [{ phoneNumber: phoneNumber }, { countryCode: countryCode }],
      });
      if (!user) {
        user = await User.create({
          phoneNumber: phoneNumber,
          userName: userName,
          countryCode: countryCode,
        });
        return _RS.created(res, "CREATED", "SignUp sucessfully");
      }
      return _RS.conflict(
        res,
        "CONFLICT",
        "User already exist with this phone number",
        user,
        startTime
      );
    } catch (err) {
      next(err);
    }
  }
}
