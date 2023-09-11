import { Request, Response } from 'express';
import {onedataDao} from '../dao/onedataDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let onedata = new onedataDao();

export class onedataService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into onedataService.ts: GpDelete')
     let  onedataId = req.params.id;
     onedata.GpDelete(onedataId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from onedataService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into onedataService.ts: GpSearch')
     let  onedataData = req.query;
     onedata.GpSearch(onedataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from onedataService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into onedataService.ts: GpSearchForUpdate')
     let  onedataData = req.body;
     onedata.GpSearchForUpdate(onedataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from onedataService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into onedataService.ts: GpUpdate')
     let  onedataData = req.body;
     onedata.GpUpdate(onedataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from onedataService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into onedataService.ts: GpGetEntityById')
     let  onedataId = req.params.id;
     onedata.GpGetEntityById(onedataId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from onedataService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into onedataService.ts: GpGetAllValues')
     
     onedata.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from onedataService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into onedataService.ts: GpCreate')
     let  onedataData = req.body;
     onedata.GpCreate(onedataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from onedataService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into onedataService.ts: GpGetNounCreatedBy')
     let  onedataData = { created_by: req.query.createdby };
     onedata.GpGetNounCreatedBy(onedataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from onedataService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}