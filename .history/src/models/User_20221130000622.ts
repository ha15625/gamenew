import * as mongoose from 'mongoose';
import { model, AggregatePaginateModel } from 'mongoose';
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');
const Schema = mongoose.Schema;
const User = new Schema({
    email: {
        type: String
    },
    name: {
        type: String
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

mongoose.plugin(aggregatePaginate);
User.set('toObject', { virtuals: true })
User.set('toJSON', { virtuals: true })

export default model<UserInterface, AggregatePaginateModel<any>>('User', User);