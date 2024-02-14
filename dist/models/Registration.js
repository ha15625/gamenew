"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const Tournament_1 = require("./Tournament");
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');
const Schema = mongoose.Schema;
const Registration = new Schema({
    tournament: {
        type: Schema.Types.ObjectId,
        ref: Tournament_1.default,
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
exports.default = (0, mongoose_1.model)('Registration', Registration);
