export declare class TouranamentController {
    /**
          * @api {get} /api/app/tournament/get-tournament get-tournament"
          * @apiVersion 1.0.0
          * @apiName get-tournament
          * @apiGroup App
          * @apiSuccessExample {json} Success-Response:
          *{"status":200,"statusText":"SUCCESS","message":"List","data":{"list":{"docs":[{"_id":"65cbe04025a1a537ac968257","time":"30","title":"First FGame","noOfPlayer":"4","date":"Wed Feb 14 2024 03:03:52 GMT+0530 (India Standard Time)","amount":10,"created_at":"2024-02-13T21:33:52.281Z","updated_at":"2024-02-13T21:33:52.281Z","__v":0},{"_id":"65cbe03c25a1a537ac968254","time":"30","title":"First FGame","noOfPlayer":"4","date":"Wed Feb 14 2024 03:03:48 GMT+0530 (India Standard Time)","amount":10,"created_at":"2024-02-13T21:33:48.104Z","updated_at":"2024-02-13T21:33:48.104Z","__v":0}],"totalDocs":2,"limit":10,"page":1,"totalPages":1,"pagingCounter":1,"hasPrevPage":false,"hasNextPage":false,"prevPage":null,"nextPage":null}},"exeTime":0}
 
     
 
          */
    static getTouranament(req: any, res: any, next: any): Promise<void>;
    /**
          * @api {get} /api/app/tournament/get-tournament-detail/:id get-tournament Detail
          * @apiVersion 1.0.0
          * @apiName get-tournament Detail
          * @apiGroup App
          * @apiSuccessExample {json} Success-Response:
          *{"status":200,"statusText":"SUCCESS","message":"Get Successfully","data":{"_id":"65cbe04025a1a537ac968257","time":"30","title":"First FGame","noOfPlayer":"4","date":"Wed Feb 14 2024 03:03:52 GMT+0530 (India Standard Time)","amount":10,"created_at":"2024-02-13T21:33:52.281Z","updated_at":"2024-02-13T21:33:52.281Z","__v":0},"exeTime":49}
 
 
     
 
          */
    static getTouranamentDetails(req: any, res: any, next: any): Promise<void>;
}
