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
exports.TouranamentController = void 0;
const ResponseHelper_1 = require("../helpers/ResponseHelper");
const Tournament_1 = require("../models/Tournament");
const Registration_1 = require("../models/Registration");
const mongoose = require("mongoose");
const startTime = new Date().getTime();
let blinds = [
    { level: '1', blind: '25/50', entity: "5", minutes: '7:00' },
    { level: '2', blind: '50/100', entity: "10", minutes: '7:00' },
    { level: '3', blind: '75/150', entity: "15", minutes: '7:00' },
    { level: '4', blind: '100/200', entity: "20", minutes: '7:00' },
    { level: '5', blind: '125/250', entity: "25", minutes: '7:00' },
    { level: '6', blind: '150/300', entity: "30", minutes: '7:00' },
    { level: '7', blind: '200/400', entity: "40", minutes: '7:00' },
    { level: '8', blind: '250/500', entity: "50", minutes: '7:00' },
    { level: '9', blind: '300/600', entity: "60", minutes: '7:00' },
];
class TouranamentController {
    /**
          * @api {get} /api/app/tournament/get-tournament get-tournament"
          * @apiVersion 1.0.0
          * @apiName get-tournament
          * @apiGroup App
          * @apiSuccessExample {json} Success-Response:
          *{"status":200,"statusText":"SUCCESS","message":"List","data":{"list":{"docs":[{"_id":"65cd08b9c142dbc974c3dd94","status":"Registering","bot":true,"title":"Fifth Game","date":"","time":"12:00","amount":10,"totalRewards":"80","firstPrize":"First Prize","secondPrize":"Second Prize","thirdPrize":"Third Prize","chips":"","commission":"","tablesCount":"3","maxPlayers":"27","created_at":"2024-02-14T18:38:49.344Z","updated_at":"2024-02-14T18:38:49.344Z","__v":0,"blindsData":[{"level":"1","blind":"25/50","entity":"5","minutes":"7:00"},{"level":"2","blind":"50/100","entity":"10","minutes":"7:00"},{"level":"3","blind":"75/150","entity":"15","minutes":"7:00"},{"level":"4","blind":"100/200","entity":"20","minutes":"7:00"},{"level":"5","blind":"125/250","entity":"25","minutes":"7:00"},{"level":"6","blind":"150/300","entity":"30","minutes":"7:00"},{"level":"7","blind":"200/400","entity":"40","minutes":"7:00"},{"level":"8","blind":"250/500","entity":"50","minutes":"7:00"},{"level":"9","blind":"300/600","entity":"60","minutes":"7:00"}]},{"_id":"65cce2b20fbe6543d0593db0","status":"Registering","bot":true,"title":"Fifth Game","date":"","time":"12:00","amount":10,"totalRewards":"80","firstPrize":"First Prize","secondPrize":"Second Prize","thirdPrize":"Third Prize","chips":"","commission":"","tablesCount":"3","maxPlayers":"27","created_at":"2024-02-14T15:56:34.433Z","updated_at":"2024-02-14T15:56:34.433Z","__v":0,"blindsData":[{"level":"1","blind":"25/50","entity":"5","minutes":"7:00"},{"level":"2","blind":"50/100","entity":"10","minutes":"7:00"},{"level":"3","blind":"75/150","entity":"15","minutes":"7:00"},{"level":"4","blind":"100/200","entity":"20","minutes":"7:00"},{"level":"5","blind":"125/250","entity":"25","minutes":"7:00"},{"level":"6","blind":"150/300","entity":"30","minutes":"7:00"},{"level":"7","blind":"200/400","entity":"40","minutes":"7:00"},{"level":"8","blind":"250/500","entity":"50","minutes":"7:00"},{"level":"9","blind":"300/600","entity":"60","minutes":"7:00"}]},{"_id":"65cc963c0fbe6543d0593da5","status":"Registering","bot":true,"title":"Fifth Game","date":"","time":"12:00","amount":10,"totalRewards":"80","firstPrize":"First Prize","secondPrize":"Second Prize","thirdPrize":"Third Prize","chips":"","commission":"","tablesCount":"3","maxPlayers":"27","created_at":"2024-02-14T10:30:20.308Z","updated_at":"2024-02-14T10:30:20.308Z","__v":0,"blindsData":[{"level":"1","blind":"25/50","entity":"5","minutes":"7:00"},{"level":"2","blind":"50/100","entity":"10","minutes":"7:00"},{"level":"3","blind":"75/150","entity":"15","minutes":"7:00"},{"level":"4","blind":"100/200","entity":"20","minutes":"7:00"},{"level":"5","blind":"125/250","entity":"25","minutes":"7:00"},{"level":"6","blind":"150/300","entity":"30","minutes":"7:00"},{"level":"7","blind":"200/400","entity":"40","minutes":"7:00"},{"level":"8","blind":"250/500","entity":"50","minutes":"7:00"},{"level":"9","blind":"300/600","entity":"60","minutes":"7:00"}]},{"_id":"65cc9401d50ffeb93cb34ba6","status":"Registering","bot":true,"title":"Fifth Game","date":"","time":"12:00","amount":10,"totalRewards":"80","firstPrize":"First Prize","secondPrize":"Second Prize","thirdPrize":"Third Prize","chips":"","commission":"","tablesCount":"3","maxPlayers":"27","created_at":"2024-02-14T10:20:49.790Z","updated_at":"2024-02-14T10:20:49.790Z","__v":0,"blindsData":[{"level":"1","blind":"25/50","entity":"5","minutes":"7:00"},{"level":"2","blind":"50/100","entity":"10","minutes":"7:00"},{"level":"3","blind":"75/150","entity":"15","minutes":"7:00"},{"level":"4","blind":"100/200","entity":"20","minutes":"7:00"},{"level":"5","blind":"125/250","entity":"25","minutes":"7:00"},{"level":"6","blind":"150/300","entity":"30","minutes":"7:00"},{"level":"7","blind":"200/400","entity":"40","minutes":"7:00"},{"level":"8","blind":"250/500","entity":"50","minutes":"7:00"},{"level":"9","blind":"300/600","entity":"60","minutes":"7:00"}]},{"_id":"65cbe04025a1a537ac968257","time":"30","title":"First FGame","noOfPlayer":"4","date":"Wed Feb 14 2024 03:03:52 GMT+0530 (India Standard Time)","amount":10,"created_at":"2024-02-13T21:33:52.281Z","updated_at":"2024-02-13T21:33:52.281Z","__v":0,"status":"Registering","maxPlayers":"100","rewards":"100","tablesCount":"4","firstPrize":"First Prize","secondPrize":"Second Prize","thirdPrize":"Third Prize","chips":"50","blindsData":[{"level":"1","blind":"25/50","entity":"5","minutes":"7:00"},{"level":"2","blind":"50/100","entity":"10","minutes":"7:00"},{"level":"3","blind":"75/150","entity":"15","minutes":"7:00"},{"level":"4","blind":"100/200","entity":"20","minutes":"7:00"},{"level":"5","blind":"125/250","entity":"25","minutes":"7:00"},{"level":"6","blind":"150/300","entity":"30","minutes":"7:00"},{"level":"7","blind":"200/400","entity":"40","minutes":"7:00"},{"level":"8","blind":"250/500","entity":"50","minutes":"7:00"},{"level":"9","blind":"300/600","entity":"60","minutes":"7:00"}]},{"_id":"65cc522fff5d4a3faf403ee7","time":"30","title":"Second Game","noOfPlayer":"3","date":"Wed Feb 14 2024 03:03:52 GMT+0530 (India Standard Time)","amount":10,"created_at":"2024-02-13T21:33:52.281Z","updated_at":"2024-02-13T21:33:52.281Z","__v":0,"status":"Registering","maxPlayers":"100","rewards":"100","tablesCount":"4","firstPrize":"First Prize","secondPrize":"Second Prize","thirdPrize":"Third Prize","chips":"50","blindsData":[{"level":"1","blind":"25/50","entity":"5","minutes":"7:00"},{"level":"2","blind":"50/100","entity":"10","minutes":"7:00"},{"level":"3","blind":"75/150","entity":"15","minutes":"7:00"},{"level":"4","blind":"100/200","entity":"20","minutes":"7:00"},{"level":"5","blind":"125/250","entity":"25","minutes":"7:00"},{"level":"6","blind":"150/300","entity":"30","minutes":"7:00"},{"level":"7","blind":"200/400","entity":"40","minutes":"7:00"},{"level":"8","blind":"250/500","entity":"50","minutes":"7:00"},{"level":"9","blind":"300/600","entity":"60","minutes":"7:00"}]},{"_id":"65cc522fff5d4a3faf403ee8","time":"30","title":"Third Game","noOfPlayer":"6","date":"Wed Feb 14 2024 03:03:52 GMT+0530 (India Standard Time)","amount":10,"created_at":"2024-02-13T21:33:52.281Z","updated_at":"2024-02-13T21:33:52.281Z","__v":0,"status":"Registering","maxPlayers":"100","rewards":"100","tablesCount":"4","firstPrize":"First Prize","secondPrize":"Second Prize","thirdPrize":"Third Prize","chips":"50","blindsData":[{"level":"1","blind":"25/50","entity":"5","minutes":"7:00"},{"level":"2","blind":"50/100","entity":"10","minutes":"7:00"},{"level":"3","blind":"75/150","entity":"15","minutes":"7:00"},{"level":"4","blind":"100/200","entity":"20","minutes":"7:00"},{"level":"5","blind":"125/250","entity":"25","minutes":"7:00"},{"level":"6","blind":"150/300","entity":"30","minutes":"7:00"},{"level":"7","blind":"200/400","entity":"40","minutes":"7:00"},{"level":"8","blind":"250/500","entity":"50","minutes":"7:00"},{"level":"9","blind":"300/600","entity":"60","minutes":"7:00"}]},{"_id":"65cbe03c25a1a537ac968254","time":"30","title":"Fourth Game","noOfPlayer":"4","date":"Wed Feb 14 2024 03:03:48 GMT+0530 (India Standard Time)","amount":10,"created_at":"2024-02-13T21:33:48.104Z","updated_at":"2024-02-13T21:33:48.104Z","__v":0,"status":"Registering","maxPlayers":"100","rewards":"100","tablesCount":"4","firstPrize":"First Prize","secondPrize":"Second Prize","thirdPrize":"Third Prize","chips":"50","blindsData":[{"level":"1","blind":"25/50","entity":"5","minutes":"7:00"},{"level":"2","blind":"50/100","entity":"10","minutes":"7:00"},{"level":"3","blind":"75/150","entity":"15","minutes":"7:00"},{"level":"4","blind":"100/200","entity":"20","minutes":"7:00"},{"level":"5","blind":"125/250","entity":"25","minutes":"7:00"},{"level":"6","blind":"150/300","entity":"30","minutes":"7:00"},{"level":"7","blind":"200/400","entity":"40","minutes":"7:00"},{"level":"8","blind":"250/500","entity":"50","minutes":"7:00"},{"level":"9","blind":"300/600","entity":"60","minutes":"7:00"}]}],"totalDocs":8,"limit":10,"page":1,"totalPages":1,"pagingCounter":1,"hasPrevPage":false,"hasNextPage":false,"prevPage":null,"nextPage":null}},"exeTime":1}
          */
    static getTouranament(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const options = {
                    page: req.query.page || 1,
                    limit: req.query.limit || 10,
                    collation: {
                        locale: "en",
                    },
                };
                let filteredQuery = {};
                let query = [
                    {
                        $match: filteredQuery,
                    },
                    {
                        $addFields: {
                            blindsData: blinds
                        }
                    },
                    {
                        $sort: {
                            created_at: -1,
                        },
                    },
                ];
                var myAggregate = Tournament_1.default.aggregate(query);
                const list = yield Tournament_1.default.aggregatePaginate(myAggregate, options);
                return ResponseHelper_1.default.ok(res, "SUCCESS", "List", { list: list }, new Date().getTime());
            }
            catch (error) {
                next(error);
            }
        });
    }
    /**
          * @api {get} /api/app/tournament/get-tournament-detail/:id get-tournament Detail
          * @apiVersion 1.0.0
          * @apiName get-tournament Detail
          * @apiGroup App
          * @apiSuccessExample {json} Success-Response:
          *{"status":200,"statusText":"SUCCESS","message":"Get Successfully","data":{"_id":"65cc9401d50ffeb93cb34ba6","status":"Registering","bot":true,"title":"Fifth Game","date":"","time":"12:00","amount":10,"totalRewards":"80","firstPrize":"First Prize","secondPrize":"Second Prize","thirdPrize":"Third Prize","chips":"","commission":"","tablesCount":"3","maxPlayers":"27","created_at":"2024-02-14T10:20:49.790Z","updated_at":"2024-02-14T10:20:49.790Z","__v":0,"blindsData":[{"level":"1","blind":"25/50","entity":"5","minutes":"7:00"},{"level":"2","blind":"50/100","entity":"10","minutes":"7:00"},{"level":"3","blind":"75/150","entity":"15","minutes":"7:00"},{"level":"4","blind":"100/200","entity":"20","minutes":"7:00"},{"level":"5","blind":"125/250","entity":"25","minutes":"7:00"},{"level":"6","blind":"150/300","entity":"30","minutes":"7:00"},{"level":"7","blind":"200/400","entity":"40","minutes":"7:00"},{"level":"8","blind":"250/500","entity":"50","minutes":"7:00"},{"level":"9","blind":"300/600","entity":"60","minutes":"7:00"}],"registrations":[{"_id":"65cd047304c901c4db4949cd","tournament":"65cc9401d50ffeb93cb34ba6","username":"Jhon Wick","userId":"123","created_at":"2024-02-14T18:20:35.705Z","updated_at":"2024-02-14T18:20:35.705Z","__v":0},{"_id":"65cd0761f2236cc7691aac1d","tournament":"65cc9401d50ffeb93cb34ba6","username":"Bruce Wayne","userId":"345","created_at":"2024-02-14T18:33:05.252Z","updated_at":"2024-02-14T18:33:05.252Z","__v":0}]},"exeTime":37666}
          */
    static getTouranamentDetails(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = mongoose.Types.ObjectId(req.params.id);
            const getArtical = yield Tournament_1.default.aggregate([
                { $match: {
                        _id: id,
                    } },
                { $set: {
                        blindsData: blinds
                    } }
            ]);
            const registrations = yield Registration_1.default.find({ tournament: id });
            getArtical[0].registrations = registrations;
            return ResponseHelper_1.default.ok(res, "SUCCESS", "Get Successfully", getArtical[0], startTime);
        });
    }
    /**
         * @api {post} /api/app/tournament/create-tournament create-tournament"
         * @apiVersion 1.0.0
         * @apiName create-tournament
         * @apiGroup App
         * @apiBody {String} title Tournament Title.
         * @apiBody {String} date Tournament Date.
         * @apiBody {String} status Status.
         * @apiBody {String} time Tournament Time.
         * @apiBody {String} amount  Amount.
         * @apiBody {String} totalRewards Rewards.
         * @apiBody {String} firstPrize First Prize.
         * @apiBody {String} secondPrize Second Prize.
         * @apiBody {String} thirdPrize Third Prize.
         * @apiBody {String} commission Commission.
         * @apiBody {Boolean} bot Bot.
         * @apiBody {Number} chips Chips.
         * @apiBody {Number} rounds Rounds.
         * @apiSuccessExample {json} Success-Response:
         *{"status":201,"statusText":"CREATED","message":"Created Successfully","data":{"status":"Registering","bot":true,"_id":"65cd08b9c142dbc974c3dd94","title":"Fifth Game","date":"","time":"12:00","amount":10,"totalRewards":"80","firstPrize":"First Prize","secondPrize":"Second Prize","thirdPrize":"Third Prize","chips":"","commission":"","tablesCount":"3","maxPlayers":"27","created_at":"2024-02-14T18:38:49.344Z","updated_at":"2024-02-14T18:38:49.344Z","__v":0}}
         */
    static createTournament(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { title, date, status, time, amount, totalRewards, firstPrize, secondPrize, thirdPrize, bot, chips, commission, rounds } = req.body;
                let data = { title, date, status, time, amount, totalRewards, firstPrize, secondPrize, thirdPrize, bot, chips, commission };
                if (rounds) {
                    data['tablesCount'] = Math.pow(3, (rounds - 1));
                    data['maxPlayers'] = data['tablesCount'] * 9;
                }
                let doc = yield new Tournament_1.default(data).save();
                return ResponseHelper_1.default.created(res, "CREATED", "Created Successfully", doc);
            }
            catch (error) {
                next(error);
            }
        });
    }
    /**
       * @api {post} /api/app/tournament/join-tournament join-tournament"
       * @apiVersion 1.0.0
       * @apiName join-tournament
       * @apiGroup App
       * @apiBody {String} tournament tournament Id.
       * @apiBody {String} username user name.
       * @apiBody {String} userId user Id.
       * @apiSuccessExample {json} Success-Response:
       *{"status":201,"statusText":"CREATED","message":"Created Successfully","data":{"_id":"65cd0761f2236cc7691aac1d","tournament":"65cc9401d50ffeb93cb34ba6","username":"Bruce Wayne","userId":"345","created_at":"2024-02-14T18:33:05.252Z","updated_at":"2024-02-14T18:33:05.252Z","__v":0}}
       */
    static joinTournament(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { tournament, username, userId } = req.body;
                let data = { tournament, username, userId };
                let exists = yield Registration_1.default.findOne({ tournament: tournament, $or: [{ username: username }, { userId: userId }] });
                if (exists) {
                    return ResponseHelper_1.default.badRequest(res, "CONFLICT", "User already registered", {}, startTime);
                }
                let doc = yield new Registration_1.default(data).save();
                return ResponseHelper_1.default.created(res, "CREATED", "Created Successfully", doc);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.TouranamentController = TouranamentController;
