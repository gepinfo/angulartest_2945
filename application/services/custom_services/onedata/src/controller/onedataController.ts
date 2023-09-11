import { Request, Response } from 'express';
import { onedataService } from '../service/onedataService';
import { CustomLogger } from '../config/Logger'
let onedata = new onedataService();

export class onedataController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    onedata.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into onedataController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from onedataController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    onedata.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into onedataController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from onedataController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    onedata.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into onedataController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from onedataController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    onedata.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into onedataController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from onedataController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    onedata.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into onedataController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from onedataController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    onedata.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into onedataController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from onedataController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    onedata.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into onedataController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from onedataController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    onedata.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into onedataController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from onedataController.ts: GpGetNounCreatedBy');
    })}


}