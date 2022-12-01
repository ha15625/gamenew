import _RS from "../../../helpers/ResponseHelper";
import LinkdinDetail from "../../../models/LinkdinDetail";
import lookupService from "../../../services/app/LookupService";

class LookupController {

    async getLookUps(req, res, next) {
        const { service, url } = req.body
        try {
            let savedUserDeatil: any
            let isDetailExist = await LinkdinDetail.findOne({ linkinUrl: url }).lean();


            // if linkdin user is not exist in our DB then fetch from third party api else fetch from our DB
            if (!isDetailExist) {
                savedUserDeatil = await lookupService.preExpandedView(service, url);
                return _RS.ok(res, "SUCCESS", "Success!", savedUserDeatil)
            }
            let availableDataPoints: any = []
            let investments: any = {};
            let homeInfo: any = { key: "Home", flag: false };
            let my_object: any = {};
            let donor: any = {};
            // console.log(isDetailExist?.details?.demographics?.homeInfo, 'test');


            let testData = { investments: false, home: false };


            if (isDetailExist?.investments) {
                console.log("Hello ...")

                isDetailExist.investments.flag = true;
                // testData.investments = true
                // availableDataPoints.push(investments);
            }
            if (isDetailExist?.homeInfo) {
                console.log("2 ...")
                homeInfo.key = 'Home';
                homeInfo.flag = true;
                testData.home = true
                availableDataPoints.push(homeInfo);
            }
            // availableDataPoints.push(homeInfo);

            console.log(testData, "test Data")
            if (isDetailExist?.donor) {
                console.log("3 ...")
                donor.key = 'Donor';
                donor.flag = true;
                availableDataPoints.push(donor);
            }
            if (isDetailExist?.finance) {
                console.log("4 ...")
                my_object.key = 'Financial';
                my_object.flag = true;
                availableDataPoints.push(my_object);
            }
            console.log(isDetailExist.investments, 'isDetailExist===========');
            // if(isDetailExist?.details?.identifiers?.maids?.length){
            //     my_object.key = 'Mobile Adv';
            //     my_object.flag = true;
            //     availableDataPoints.push(my_object);
            // }
            // if(isDetailExist?.details?.emails?.length){
            //     my_object.key = 'Email Address';
            //     my_object.flag = true;
            //     availableDataPoints.push(my_object);
            // }
            console.log(availableDataPoints, 'availableDataPoints=============');

            return _RS.ok(res, "SUCCESS", "Success!", availableDataPoints)
        } catch (err) {
            next(err);
        }
    }
}

export default new LookupController;