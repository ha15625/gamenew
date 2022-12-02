import respObj from "../services/GoogleFitService";
import _RS from "../helpers/ResponseHelper";

export class GoogleFitController{

   static async createDataSource(req,res,next){
    const startTime = new Date().getTime();
    try{
        const data = req.body.data
        const result = await respObj.createDataSource(data)
        return _RS.ok(
        res,
        "SUCCESS",
        "Data source created successfully!",
        result,
        startTime
      );
    }catch(error){
        next(error)
    }
   }
   static async getDataSource(req,res,next){
    const startTime = new Date().getTime();
    try{
        const result = await respObj.getDataSource()
        return _RS.ok(
        res,
        "SUCCESS",
        "Get data source List!",
        result,
        startTime
      );
    }catch(error){
        next(error)
    }
   }
   static async aggregateDataSource(req,res,next){
    const startTime = new Date().getTime();
    try{
        const data = req.body.data
        const result = await respObj.aggregateDataSource(data)
        return _RS.ok(
        res,
        "SUCCESS",
        "data source used to show step count in the Google Fit!",
        result,
        startTime
      );
    }catch(error){
        next(error)
    }
   }
}