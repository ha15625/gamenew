"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');
const Schema = mongoose.Schema;
const User = new Schema({
    userName: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    countryCode: {
        type: String
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
mongoose.plugin(aggregatePaginate);
User.set('toObject', { virtuals: true });
User.set('toJSON', { virtuals: true });
exports.default = (0, mongoose_1.model)('User', User);
