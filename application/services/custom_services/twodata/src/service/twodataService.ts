import { Request, Response } from 'express';
import {twodataDao} from '../dao/twodataDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let twodata = new twodataDao();

export class twodataService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into twodataService.ts: GpDelete')
     let  twodataId = req.params.id;
     twodata.GpDelete(twodataId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from twodataService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into twodataService.ts: GpSearch')
     let  twodataData = req.query;
     twodata.GpSearch(twodataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from twodataService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into twodataService.ts: GpSearchForUpdate')
     let  twodataData = req.body;
     twodata.GpSearchForUpdate(twodataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from twodataService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into twodataService.ts: GpUpdate')
     let  twodataData = req.body;
     twodata.GpUpdate(twodataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from twodataService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into twodataService.ts: GpGetEntityById')
     let  twodataId = req.params.id;
     twodata.GpGetEntityById(twodataId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from twodataService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into twodataService.ts: GpGetAllValues')
     
     twodata.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from twodataService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into twodataService.ts: GpCreate')
     let  twodataData = req.body;
     twodata.GpCreate(twodataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from twodataService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into twodataService.ts: GpGetNounCreatedBy')
     let  twodataData = { created_by: req.query.createdby };
     twodata.GpGetNounCreatedBy(twodataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from twodataService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}