import { Component, OnInit, ViewChild } from '@angular/core';
import { CreatetwoService } from './createtwo.service';





@Component({
  selector: 'app-createtwo',
  templateUrl: './createtwo.component.html',
  styleUrls: ['./createtwo.component.scss'],
})

export class CreatetwoComponent implements OnInit {
    public twodata:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
    }




    constructor (
        private createtwoService: CreatetwoService,
    ) { }

    ngOnInit() {
        this.twodata.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    GpCreate() {
        this.createtwoService.GpCreate(this.twodata).subscribe((data:any) => {
            this.twodata.name = ''
 	 	this.twodata.email = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}