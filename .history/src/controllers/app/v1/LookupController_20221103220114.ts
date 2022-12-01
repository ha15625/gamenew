import _RS from "../../../helpers/ResponseHelper";
import LinkdinDetail from "../../../models/LinkdinDetail";
import lookupService from "../../../services/app/LookupService";

class LookupController {

    async getLookUps(req, res, next) {
        const { service, url } = req.body
        try {
            let savedUserDeatil: any
            let isDetailExist = await LinkdinDetail.findOne({ linkinUrl: url });


            // if linkdin user is not exist in our DB then fetch from third party api else fetch from our DB
            if (!isDetailExist) {
                savedUserDeatil = await lookupService.preExpandedView(service, url);
                return _RS.ok(res, "SUCCESS", "Success!", savedUserDeatil)
            }
            let availableDataPoints: any = []
            let my_object: any = [];
            // console.log(isDetailExist?.details?.demographics?.homeInfo, 'test');
            console.log(isDetailExist.investments, 'isDetailExist===========');

            if (isDetailExist?.investments) {
                console.log("Hello ...")
                my_object.key = 'Investments';
                my_object.flag = true;
                availableDataPoints.push(my_object);
            }
            if (isDetailExist?.homeInfo) {
                console.log("2 ...")
                my_object.key = 'Home';
                my_object.flag = true;
                availableDataPoints.push(my_object);
            }
            if (isDetailExist?.donor) {
                console.log("3 ...")
                my_object.key = 'Donor';
                my_object.flag = true;
                availableDataPoints.push(my_object);
            }
            if (isDetailExist?.finance) {
                console.log("4 ...")

                my_object.key = 'Financial';
                my_object.flag = true;
                availableDataPoints.push(my_object);
            }
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