
import _RS from "../helpers/ResponseHelper";
import Tournament from "../models/Tournament";

export class TouranamentController {
   /**
         * @api {get} /api/app/tournament/get-tournament get-tournament"
         * @apiVersion 1.0.0
         * @apiName get-tournament
         * @apiGroup App
         * @apiSuccessExample {json} Success-Response:
         *{"status":200,"statusText":"SUCCESS","message":"List","data":{"list":{"docs":[{"_id":"65cbe04025a1a537ac968257","time":"30","title":"First FGame","noOfPlayer":"4","date":"Wed Feb 14 2024 03:03:52 GMT+0530 (India Standard Time)","amount":10,"created_at":"2024-02-13T21:33:52.281Z","updated_at":"2024-02-13T21:33:52.281Z","__v":0},{"_id":"65cbe03c25a1a537ac968254","time":"30","title":"First FGame","noOfPlayer":"4","date":"Wed Feb 14 2024 03:03:48 GMT+0530 (India Standard Time)","amount":10,"created_at":"2024-02-13T21:33:48.104Z","updated_at":"2024-02-13T21:33:48.104Z","__v":0}],"totalDocs":2,"limit":10,"page":1,"totalPages":1,"pagingCounter":1,"hasPrevPage":false,"hasNextPage":false,"prevPage":null,"nextPage":null}},"exeTime":0}

    

         */
  static async getTouranament(req, res, next) {
    await Tournament.create({
      time: "30",
    title:"First FGame",
    noOfPlayer:"4",
    date:new Date(),
    amount:10
    })
    try {
      const options = {
        page: req.query.page || 1,
        limit: req.query.limit || 10,
        collation: {
          locale: "en",
        },
      };
      let filteredQuery: any = {};
      let query: any = [
        {
          $match: filteredQuery,
        },
  
        {
          $sort: {
            created_at: -1,
          },
        },
      ];
      var myAggregate = Tournament.aggregate(query);
      const list = await Tournament.aggregatePaginate(myAggregate, options);
      return _RS.ok(res, "SUCCESS", "List", { list: list }, new Date().getTime());
    } catch (error) {
      next(error)
    }
  }

   /**
         * @api {get} /api/app/tournament/get-tournament-detail/:id get-tournament Detail
         * @apiVersion 1.0.0
         * @apiName get-tournament Detail
         * @apiGroup App
         * @apiSuccessExample {json} Success-Response:
         *{"status":200,"statusText":"SUCCESS","message":"Get Successfully","data":{"_id":"65cbe04025a1a537ac968257","time":"30","title":"First FGame","noOfPlayer":"4","date":"Wed Feb 14 2024 03:03:52 GMT+0530 (India Standard Time)","amount":10,"created_at":"2024-02-13T21:33:52.281Z","updated_at":"2024-02-13T21:33:52.281Z","__v":0},"exeTime":49}


    

         */

  static async getTouranamentDetails(req, res, next) {
    const startTime = new Date().getTime();
      const id = req.params.id;
      const getArtical = await Tournament.findOne({
        _id: req.params.id,
      });
      return _RS.ok(
        res,
        "SUCCESS",
        "Get Successfully",
        getArtical,
        startTime
      );
  }
}