import * as mongoose from 'mongoose';
import twodataModel from '../models/daomodels/twodata';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class twodataDao {
    private twodata = twodataModel;
    constructor() { }
    
    public async GpDelete(twodataId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into twodataDao.ts: GpDelete');

    

    
    
    
    this.twodata.findByIdAndRemove(twodataId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from twodataDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(twodataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into twodataDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(twodataData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.twodata.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from twodataDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(twodataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into twodataDao.ts: GpSearchForUpdate');

    

    
    
    
    this.twodata.findOneAndUpdate({ _id: twodataData._id }, twodataData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from twodataDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(twodataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into twodataDao.ts: GpUpdate');

    

    
    
    
    this.twodata.findOneAndUpdate({ _id: twodataData._id }, twodataData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from twodataDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(twodataId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into twodataDao.ts: GpGetEntityById');

    

    
    
    
    this.twodata.findById(twodataId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from twodataDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into twodataDao.ts: GpGetAllValues');

    

    
    
    
    this.twodata.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from twodataDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(twodataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into twodataDao.ts: GpCreate');

    let temp = new twodataModel(twodataData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from twodataDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(twodataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into twodataDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.twodata.aggregate(([
                        { $match: { $and: [{ created_by: twodataData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from twodataDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}