import * as mongoose from 'mongoose';
import { model, AggregatePaginateModel } from 'mongoose';
import { LinkdinInterface } from '../interfaces/modelInterfaces/LinkdinInterface';
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');
const Schema = mongoose.Schema;
const LinkdinDetail = new Schema({
    linkinUrl: {
        type: String,
        default: null
    },
    fullName: {
        type: String,
        default: null
    },
    gender: {
        type: String,
        default: null
    },
    location: {
        type: String,
        default: null
    },
    title: {
        type: String,
        default: null
    },
    organization: {
        type: String,
        default: null
    },
    twitter: {
        type: String,
        default: null
    },
    linkedin: {
        type: String,
        default: null
    },
    bio: {
        type: String,
        default: null
    },
    avatar: {
        type: String,
        default: null
    },
    website: {
        type: String,
        default: null
    },
    details: {
        type: Object,
        default: null,
        // select:false
    },
    investments: {
        type: Object,
        default: null
    },
    home: {
        type: Object,
        default: null
    },
    donor: {
        type: Object,
        default: null
    },
    finance: {
        type: Object,
        default: null
    },
    mobileAdvertising: [
        {
            type: Object
        }
    ],
    emails: [
        {
            type: Object
        }
    ],


    dataPoint: {
        investments: {
            type: Boolean,
            default: false
        },

    },



}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

mongoose.plugin(aggregatePaginate);
LinkdinDetail.set('toObject', { virtuals: true })
LinkdinDetail.set('toJSON', { virtuals: true })

export default model<LinkdinInterface, AggregatePaginateModel<any>>('LinkdinDetail', LinkdinDetail);