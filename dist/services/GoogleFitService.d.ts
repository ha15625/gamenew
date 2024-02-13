declare class GoogleFitnessService {
    constructor();
    getDataSource(): Promise<any>;
    createDataSource(data?: {}): Promise<any>;
    aggregateDataSource(data?: {}): Promise<any>;
    /**
     * This method is used to get access token of a perticular restaurant.
     * @returns
     */
    getAccessToken(): Promise<string>;
}
declare let respObj: GoogleFitnessService;
export default respObj;
