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
class TouranamentController {
    /**
          * @api {get} /api/app/tournament/get-tournament get-tournament"
          * @apiVersion 1.0.0
          * @apiName get-tournament
          * @apiGroup App
          * @apiSuccessExample {json} Success-Response:
          *{"status":200,"statusText":"SUCCESS","message":"List","data":{"list":{"docs":[{"_id":"65cbe04025a1a537ac968257","time":"30","title":"First FGame","noOfPlayer":"4","date":"Wed Feb 14 2024 03:03:52 GMT+0530 (India Standard Time)","amount":10,"created_at":"2024-02-13T21:33:52.281Z","updated_at":"2024-02-13T21:33:52.281Z","__v":0},{"_id":"65cbe03c25a1a537ac968254","time":"30","title":"First FGame","noOfPlayer":"4","date":"Wed Feb 14 2024 03:03:48 GMT+0530 (India Standard Time)","amount":10,"created_at":"2024-02-13T21:33:48.104Z","updated_at":"2024-02-13T21:33:48.104Z","__v":0}],"totalDocs":2,"limit":10,"page":1,"totalPages":1,"pagingCounter":1,"hasPrevPage":false,"hasNextPage":false,"prevPage":null,"nextPage":null}},"exeTime":0}
 
     
 
          */
    static getTouranament(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Tournament_1.default.create({
                time: "30",
                title: "First FGame",
                noOfPlayer: "4",
                date: new Date(),
                amount: 10
            });
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
          *{"status":200,"statusText":"SUCCESS","message":"Get Successfully","data":{"_id":"65cbe04025a1a537ac968257","time":"30","title":"First FGame","noOfPlayer":"4","date":"Wed Feb 14 2024 03:03:52 GMT+0530 (India Standard Time)","amount":10,"created_at":"2024-02-13T21:33:52.281Z","updated_at":"2024-02-13T21:33:52.281Z","__v":0},"exeTime":49}
 
 
     
 
          */
    static getTouranamentDetails(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const startTime = new Date().getTime();
            const id = req.params.id;
            const getArtical = yield Tournament_1.default.findOne({
                _id: req.params.id,
            });
            return ResponseHelper_1.default.ok(res, "SUCCESS", "Get Successfully", getArtical, startTime);
        });
    }
}
exports.TouranamentController = TouranamentController;