import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateoneService } from './createone.service';





@Component({
  selector: 'app-createone',
  templateUrl: './createone.component.html',
  styleUrls: ['./createone.component.scss'],
})

export class CreateoneComponent implements OnInit {
    twodataitemArray: any = [];
    public onedata:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        entitybind: '',
    }
    public twodata:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
    }




    constructor (
        private createoneService: CreateoneService,
    ) { }

    ngOnInit() {
        this.onedata.created_by = sessionStorage.getItem('email') || ''; 
        this.twodata.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    twodataGpGetAllValues() {
        this.createoneService.twodataGpGetAllValues().subscribe((data:any) => {
            console.log(data);
 	 	this.twodataitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.createoneService.GpCreate(this.onedata).subscribe((data:any) => {
            this.onedata.name = ''
 	 	this.onedata.entitybind = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}