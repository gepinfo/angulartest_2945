import * as mongoose from 'mongoose';
import { onedataSchema } from './models/daomodels/onedata';
import * as mongoose from 'mongoose';
import { twodataSchema } from './models/daomodels/twodata';

const twodataModel = mongoose.model('twodata', twodataSchema);

export class Seed {

    constructor() {

    }

    

}
