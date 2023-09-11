import { Request, Response } from 'express';
import { twodataService } from '../service/twodataService';
import { CustomLogger } from '../config/Logger'
let twodata = new twodataService();

export class twodataController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    twodata.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into twodataController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from twodataController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    twodata.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into twodataController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from twodataController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    twodata.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into twodataController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from twodataController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    twodata.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into twodataController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from twodataController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    twodata.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into twodataController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from twodataController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    twodata.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into twodataController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from twodataController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    twodata.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into twodataController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from twodataController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    twodata.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into twodataController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from twodataController.ts: GpGetNounCreatedBy');
    })}


}