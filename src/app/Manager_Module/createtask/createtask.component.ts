import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ITask } from 'src/app/models/task.models';
import {MatDialogRef} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { CreatetaskService } from './createtask.service';
import { IProject } from 'src/app/models/project.models';
@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.scss']
})
export class CreatetaskComponent implements OnInit {
  task:ITask={
    id: '',
    projectname: '',
    taskname:'',
    startdate: '',
    enddate: '',
    priority: '',
    description: '',
    assignedto: ''
  }
  projectName:any;
  employeeName: any;
  constructor(private _createtaskService:CreatetaskService,private _snackbar:MatSnackBar,
    public dialogRef:MatDialogRef<CreatetaskComponent>) { }

  ngOnInit(): void {
    this._createtaskService.getProjectName().subscribe(
      (result)=>{
        this.projectName=result;
      }
    ),
    (err)=>console.log(err);

    this._createtaskService.getEmployeeName().subscribe(
      (result)=>{
        this.employeeName=result;
      }
    ),
    (err)=>console.log(err);

     

  }
  onNoClick(){
    this.dialogRef.close();
  }
  onSubmit(message:string,action:string,form:NgForm){
    this._createtaskService.createProject(this.task).subscribe(
      (result) =>
      {
        
        this._snackbar.open(message,action,{duration:2000});
        console.log(result);
  
      },
      (err) => console.log(err)
    );
    if(form.valid){
      console.log(form.value)
    }
}
}
