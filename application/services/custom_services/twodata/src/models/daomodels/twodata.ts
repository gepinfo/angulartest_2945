
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const twodataSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   email: { type: String }
})

const twodataModel = mongoose.model('twodata', twodataSchema, 'twodata');
export default twodataModel;
