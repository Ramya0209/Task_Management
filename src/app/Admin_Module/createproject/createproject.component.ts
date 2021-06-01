import { Component,OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { IProject } from "src/app/models/project.models";
import { CreateProjectService } from './createproject.service';
import {MatDialogRef} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { IEmployee } from 'src/app/models/login.models';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';
import { Route, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
// import { MAT_DIALOG_DATA} from '@angular/material/dialog';




@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.scss']
})
export class CreateProjectComponent implements OnInit  {
  constructor(private _createprojectService:CreateProjectService,private _snackbar:MatSnackBar,
    public dialogRef:MatDialogRef<CreateProjectComponent,any>,private route:Router,private _editProjectService:ProjectService) { }

  project:IProject={
    id: 0,
    projectname: '',
    startdate: '',
    enddate: '',
    priority: '',
    description: '',
  }
 
  onNoClick(){
    this.dialogRef.close();
  }

  onSubmit(message:string,action:string,form:NgForm){
    this._createprojectService.createProject(this.project).subscribe(
      (result) =>
      {
        this._editProjectService.seteditProject(result);
        this._snackbar.open(message,action,{duration:2000});
        console.log(result);
        this.dialogRef.close();
        this.route.navigate(['/viewproject-admin']);      
      },
      (err) => console.log(err)
    );
    if(form.valid){
      console.log(form.value)
    }
}
ngOnInit(): void {
  // this.getUser();
  }
  // getUser(){
  // this._createprojectService.getUserId(this.employee.id).subscribe(
  //   (response) =>
  //   {
  //     console.log(response);
      
  //   }
  // );
  // }

}

