import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IReport } from 'src/app/models/report.models';
import { ManagerReportService} from '../managerreport/managerreport.service';


@Component({
  selector: 'app-managerreport',
  templateUrl: './managerreport.component.html',
  styleUrls: ['./managerreport.component.scss']
})
export class ManagerreportComponent  {
  report:IReport={
    id:0,
    project_id:0,
    task_id:0,
    user_id:0,
    project_name:'',
    task_name:'',
      progress:''
    }
  constructor(private _managerreportService:ManagerReportService,private _snackbar:MatSnackBar) { }
  onSubmit(message:string,action:string){
this._managerreportService.addManagerreport(this.report).subscribe(
  
      (result) =>
      {
        this._snackbar.open(message,action,{duration:2000});
      },
      (err) => console.log(err)
      );
}
}
