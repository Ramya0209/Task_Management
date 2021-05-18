import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IReport } from 'src/app/models/report.models';
import { EmpReportService } from '../emp-report/emp-report.service';

@Component({
  selector: 'app-emp-report',
  templateUrl: './emp-report.component.html',
  styleUrls: ['./emp-report.component.scss']
})
export class EmpReportComponent  {
report:IReport={
  id:0,
  project_id:0,
  task_id:0,
  user_id:0,
  project_name:'',
  task_name:'',
    progress:''
  }

  constructor(private _empreportService: EmpReportService,private router:Router,private _snackbar:MatSnackBar) { }
  onSubmit(message:string,action:string,form:NgForm){

    this._empreportService.addManagerreport(this.report).subscribe(
      (result) =>
      {
        this._snackbar.open(message,action,{duration:2000})
      },
      (err) => console.log(err)
      );
      if(form.valid){
        console.log(form.value)
      }
  }

}
