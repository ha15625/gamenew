import * as mongoose from 'mongoose';
import { model, AggregatePaginateModel } from 'mongoose';
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');
const Schema = mongoose.Schema;
const Tournament= new Schema({
    type: {
        type: String
    },
    time: {
        type: String
    },
    title:{
        type:String
    },
    noOfPlayer:{
        type:String
    },
    date:{
        type:String
    },
    amount:{
        type:Number
    }

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

mongoose.plugin(aggregatePaginate);

export default model<any, AggregatePaginateModel<any>>('Tournament', Tournament);