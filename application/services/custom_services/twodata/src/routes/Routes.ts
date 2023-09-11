import { Request, Response, NextFunction } from "express";
import { twodataController } from '../controller/twodataController';


export class Routes {
    private twodata: twodataController = new twodataController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/twodata/:id').delete(this.twodata.GpDelete);
app.route('/twodata/get/search').get(this.twodata.GpSearch);
app.route('/twodata/get/update').put(this.twodata.GpSearchForUpdate);
app.route('/twodata').put(this.twodata.GpUpdate);
app.route('/twodata/:id').get(this.twodata.GpGetEntityById);
app.route('/twodata').get(this.twodata.GpGetAllValues);
app.route('/twodata').post(this.twodata.GpCreate);
app.route('/twodata/userid/created_by').get(this.twodata.GpGetNounCreatedBy);
     }

}