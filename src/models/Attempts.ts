import * as mongoose from 'mongoose';
import { model } from 'mongoose';

const Schema = mongoose.Schema;
const Attempt = new Schema({
    wrongAttempt: {
        type: Number,
        default:0
    },
    rightAttempt: {
        type: Number,
        default:0
    },
});
export default model<any>('Attempt', Attempt);