import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class onedataController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.delete('/onedata/:id', this.GpDelete);
this.router.get('/onedata/get/search', this.GpSearch);
this.router.put('/onedata/get/update', this.GpSearchForUpdate);
this.router.put('/onedata', this.GpUpdate);
this.router.get('/onedata/:id', this.GpGetEntityById);
this.router.get('/onedata', this.GpGetAllValues);
this.router.post('/onedata', this.GpCreate);
this.router.get('/onedata/userid/created_by', this.GpGetNounCreatedBy);
        this.router.get('/onedata/get/searchrelationship', this.GpSearchRelationship);
        //#@ssofacebookapiroute@#
        //#@ssogithubapiroute@#
        //#@gepbankingapiroute@#
    }

public GpDelete(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into onedataController.ts: GpDelete');
        new ApiAdapter().delete(Constant.ONEDATAURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from onedataController.ts: GpDelete');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into onedataController.ts: GpSearch');
        new ApiAdapter().get(Constant.ONEDATAURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from onedataController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearchForUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into onedataController.ts: GpSearchForUpdate');
        new ApiAdapter().put(Constant.ONEDATAURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from onedataController.ts: GpSearchForUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into onedataController.ts: GpUpdate');
        new ApiAdapter().put(Constant.ONEDATAURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from onedataController.ts: GpUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetEntityById(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into onedataController.ts: GpGetEntityById');
        new ApiAdapter().get(Constant.ONEDATAURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from onedataController.ts: GpGetEntityById');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into onedataController.ts: GpGetAllValues');
        new ApiAdapter().get(Constant.ONEDATAURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from onedataController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into onedataController.ts: GpCreate');
        new ApiAdapter().post(Constant.ONEDATAURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from onedataController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounCreatedBy(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into onedataController.ts: GpGetNounCreatedBy');
        new ApiAdapter().get(Constant.ONEDATAURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from onedataController.ts: GpGetNounCreatedBy');
        }).catch(err => {
            res.send(err);
        });
    }

    public GpSearchRelationship(req: Request, res: Response) 
                                            {
                                                let response1:any;
                                                let response2:any;
                                                let finalresponse:any;
                                                let relURL = '/twodata/get/search?name=';                                                
                                                new CustomLogger().showLogger('info', 'Enter into onedataController.ts: GpSearch');
                                                new ApiAdapter().get(Constant.ONEDATAURL + `${req.url}`).then((res: any) => res.response.json()).then(result => 
                                                {
                                                  response1 = result;
                                                  new CustomLogger().showLogger('info', 'Exit from onedataController.ts: GpSearch');
                                                  new CustomLogger().showLogger('info', 'Enter into twodataController.ts: GpSearch');
                                                  new ApiAdapter().get(`${Constant.TWODATAURL}`+`${relURL}`+`${response1[0].entitybind}`).then((res: any) => res.response.json()).then(result => 
                                                  {
                                                    response2 = result;
                                                    finalresponse = 
                                                    {
                                                      "response1" : response1,
                                                      "response2" : response2
                                                    }
                                                    new CustomLogger().showLogger('info', 'Exit from twodataController.ts: GpSearch');
                                                    req.baseUrl === '/mobile' ? res.send(finalresponse) :
                                                    req.baseUrl === '/web' ? res.send(finalresponse) : res.send(null);
                                                  });
                                                }).catch(err => 
                                                   {
                                                    res.send(err);
                                                   });
                                            }

    //#@apifacebooklogin@#

    //#@apigithublogin@#

    //#@gepbankinglogin@#








}

