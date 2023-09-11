import * as mongoose from 'mongoose';
import onedataModel from '../models/daomodels/onedata';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class onedataDao {
    private onedata = onedataModel;
    constructor() { }
    
    public async GpDelete(onedataId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into onedataDao.ts: GpDelete');

    

    
    
    
    this.onedata.findByIdAndRemove(onedataId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from onedataDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(onedataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into onedataDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(onedataData).forEach(
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
    this.onedata.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from onedataDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(onedataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into onedataDao.ts: GpSearchForUpdate');

    

    
    
    
    this.onedata.findOneAndUpdate({ _id: onedataData._id }, onedataData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from onedataDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(onedataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into onedataDao.ts: GpUpdate');

    

    
    
    
    this.onedata.findOneAndUpdate({ _id: onedataData._id }, onedataData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from onedataDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(onedataId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into onedataDao.ts: GpGetEntityById');

    

    
    
    
    this.onedata.findById(onedataId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from onedataDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into onedataDao.ts: GpGetAllValues');

    

    
    
    
    this.onedata.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from onedataDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(onedataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into onedataDao.ts: GpCreate');

    let temp = new onedataModel(onedataData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from onedataDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(onedataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into onedataDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.onedata.aggregate(([
                        { $match: { $and: [{ created_by: onedataData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from onedataDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}