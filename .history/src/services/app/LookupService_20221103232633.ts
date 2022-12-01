
import { AuthInterface } from "../../interfaces/serviceInterfaces/AuthInterface";
import { UserInterface } from "../../interfaces/modelInterfaces/UserInterface";
import User from "../../models/User";
import JwtHelper from "../../helpers/JwtHelper";
import Auth from "../../utils/Auth";
import { NextFunction } from "express";
import { ServiceResponseInterface } from "../../interfaces/ServiceResponseInterface";
import { serviceResponse } from "../../utils/ServiceResponse";
import { ObjectId } from "mongoose";
import FullContactService from "../app/fullContactService";
import LinkdinDetail from "../../models/LinkdinDetail";
import { String } from "aws-sdk/clients/acm";
import ExpandLimit from "../../models/ExpandLimit";

class LookupService {

  /**
   * Social Signup User
   * @param data 
   * @param files 
   * @param next 
   * @returns 
   */
  async saveUser(data: saveUserDataInterface, next: NextFunction): Promise<{ user: any, token: string }> {
    const { name, email, linkedinUrl } = data;
    let user: UserInterface = await User.findOne({ email }).populate('linkedinUrl');
    if (!user) {
      user = await User.create({ name, email, linkedinUrl });
      user = await user.populate("linkedinUrl").execPopulate();
      const saveCount = {
        userId: user._id,
        linkedinUrl: linkedinUrl,
        count: 1
      }
      await ExpandLimit.create(saveCount);
    }
    let userObj = {
      _id: user._id,
      name: user.name,
      email: user.email,
      created_at: user.created_at
    }
    let jwtToken = await Auth.getToken(userObj, 100000, next);
    return { user, token: jwtToken };
  }
  async expandedView(linkedinUrl: string, userId: string | ObjectId): Promise<any> {
    // return User.findOne({ _id: userId, linkedinUrl: linkedinUrl }).populate('linkedinUrl');
    // let user = await User.findOne({_id:userId});
    // let user = await ExpandLimit.findOne({userId:userId , linkedinUrl:{$nin:linkedinUrl}})
    let user = await ExpandLimit.findOne({ userId: userId })
    if (user && user.count < 5) {
      let test = await ExpandLimit.findOne({ userId: userId, linkedinUrl: { $nin: linkedinUrl } })
      if (test) {
        user.linkedinUrl.push(linkedinUrl);
        user.count += 1
        user.save()
      }
      let linkdinDetail = await LinkdinDetail.findOne({ _id: linkedinUrl });
      return linkdinDetail
    } else {
      console.log('user not exist , you need to login first');

    }

  }
  async preExpandedView(service: string, url: string, userId?: string): Promise<any> {
    const data = {
      "profiles": [{
        "service": service,
        "url": url
      }]
    }
    let userDetail = await FullContactService.getFullContactService(data);
    let newpermisson: any = {}



    const dataToSave = {
      linkinUrl: url,
      fullName: userDetail.fullName,
      gender: userDetail.gender,
      location: userDetail.location,
      title: userDetail.title,
      organization: userDetail.organization,
      twitter: userDetail.twitter,
      linkedin: userDetail.linkedin,
      bio: userDetail.bio,
      avatar: userDetail.avatar,
      website: userDetail.website,
      details: userDetail.details,
      investments: userDetail?.details?.surveys?.investments,
      home: userDetail?.details?.demographics?.homeInfo,
      donor: userDetail?.details?.marketTrends?.donor,
      finance: userDetail?.details?.household?.finance,
      mobileAdvertising: userDetail?.details?.identifiers?.maids,
      emails: userDetail?.details?.emails,
      dataPoint: "",

    }
    if (userDetail?.details?.surveys?.investments) {
      newpermisson.
    }
    let savedUserDeatil = await LinkdinDetail.create(dataToSave);
    savedUserDeatil.details = undefined;
    savedUserDeatil.investments = undefined
    savedUserDeatil.home = undefined
    savedUserDeatil.donor = undefined
    savedUserDeatil.finance = undefined
    savedUserDeatil.mobileAdvertising = undefined
    savedUserDeatil.emails = undefined
    // const user = await User.findOne({ _id: userId });
    // if (user) {
    //   const searchData = {
    //     userId: userId,
    //     linkedinUrl: savedUserDeatil
    //   }
    //   await RecentSearch.create(searchData);
    // }
    return savedUserDeatil
  }

  async myLookUps(userId: string | ObjectId): Promise<any> {
    return ExpandLimit.findOne({ userId: userId }).populate('linkedinUrl').sort({ created_at: 1 });
  }

}

export interface saveUserDataInterface {
  name: string,
  email: string,
  linkedinUrl: string
}

export default new LookupService();
