import * as mongoose from 'mongoose';
import { onedataSchema } from './models/daomodels/onedata';

const onedataModel = mongoose.model('onedata', onedataSchema);

export class Seed {

    constructor() {

    }

    

}
