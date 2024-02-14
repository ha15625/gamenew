import * as mongoose from 'mongoose';
import { model, AggregatePaginateModel } from 'mongoose';
import Tournament from './Tournament';
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');
const Schema = mongoose.Schema;
const Registration = new Schema({
    tournament: {
        type: Schema.Types.ObjectId,
        ref: Tournament,
    },
    userId: {
        type: String
    },
    username: {
        type: String
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

mongoose.plugin(aggregatePaginate);

export default model<any, AggregatePaginateModel<any>>('Registration', Registration);