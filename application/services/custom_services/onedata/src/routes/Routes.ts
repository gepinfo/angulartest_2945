import { Request, Response, NextFunction } from "express";
import { onedataController } from '../controller/onedataController';


export class Routes {
    private onedata: onedataController = new onedataController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/onedata/:id').delete(this.onedata.GpDelete);
app.route('/onedata/get/search').get(this.onedata.GpSearch);
app.route('/onedata/get/update').put(this.onedata.GpSearchForUpdate);
app.route('/onedata').put(this.onedata.GpUpdate);
app.route('/onedata/:id').get(this.onedata.GpGetEntityById);
app.route('/onedata').get(this.onedata.GpGetAllValues);
app.route('/onedata').post(this.onedata.GpCreate);
app.route('/onedata/userid/created_by').get(this.onedata.GpGetNounCreatedBy);
     }

}