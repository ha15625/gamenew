"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');
const Schema = mongoose.Schema;
const Tournament = new Schema({
    type: {
        type: String
    },
    time: {
        type: String
    },
    title: {
        type: String
    },
    maxPlayers: {
        type: String,
    },
    noOfPlayer: {
        type: String
    },
    date: {
        type: String
    },
    amount: {
        type: Number
    },
    status: {
        type: String,
        enum: ["Registering", "Proceeding", "Spectator", "Final-Registration"],
        default: "Registering"
    },
    totalRewards: {
        type: String,
    },
    tablesCount: {
        type: String,
    },
    firstPrize: {
        type: String
    },
    secondPrize: {
        type: String
    },
    thirdPrize: {
        type: String
    },
    chips: {
        type: String
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
mongoose.plugin(aggregatePaginate);
exports.default = (0, mongoose_1.model)('Tournament', Tournament);
