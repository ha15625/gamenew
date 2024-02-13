import { env } from "../environments/Env";


const axios = require('axios').default;

class GoogleFitnessService {
  constructor() {
  }

    async getDataSource(){
        try{
            const accessToken = await this.getAccessToken();
            const url = `${env().baseUrl}dataSources`
            const res: any = await axios.get(url, {
                headers:{
                    "Authorization": `Bearer ${accessToken}`
                }
            });
            if( res?.data ){
                return res?.data;
            }else{
                return [];
            }
        }
        catch(err){
            console.log('GoogleFitness', err.message)
            let statusCode = 403
            return statusCode
        }
    }

    async createDataSource( data={} ){
        try{
            const accessToken = await this.getAccessToken();
            const url = `${env().baseUrl}dataSources`
            const res: any = await axios.post(url, data, {
                headers:{
                    "Authorization": `Bearer ${accessToken}`
                }
            });
            if( res?.data ){
                return res?.data;
            }else{
                return [];
            }
        }
        catch(err){
            console.log('GoogleFitness', err.message)
            let statusCode = 403
            return statusCode
        }
    }

    async aggregateDataSource( data={} ){
        try{
            const accessToken = await this.getAccessToken();
            const url = `${env().baseUrl}dataset:aggregate`
            const res: any = await axios.post(url, data, {
                headers:{
                    "Authorization": `Bearer ${accessToken}`
                }
            });
            if( res?.data ){
                return res?.data;
            }else{
                return [];
            }
        }
        catch(err){
            console.log('GoogleFitness', err.message)
            let statusCode = 403
            return statusCode
        }
    }


    /**
     * This method is used to get access token of a perticular restaurant.
     * @returns 
     */

    async getAccessToken(){
        try{
            let accessToken = env().googleAccessToken
            return accessToken;
        }catch(error){
            console.log('catch_error_getAccessToken')
        }
    }

    
}
let respObj = new GoogleFitnessService();
export default respObj;