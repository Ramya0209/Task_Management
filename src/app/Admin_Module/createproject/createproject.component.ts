import { Component} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { IProject } from "src/app/models/project.models";
import { CreateProjectService } from './createproject.service';


@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.scss']
})
export class CreateProjectComponent  {
  constructor(private _createprojectService:CreateProjectService,private _snackbar:MatSnackBar) { }

  project:IProject={
    id: 0,
    projectname: '',
    startdate: '',
    enddate: '',
    priority: '',
    description: '',
  
  
  }
  onSubmit(message:string,action:string){
    this._createprojectService.createProject(this.project).subscribe(
      (result) =>
      {
        
        this._snackbar.open(message,action,{duration:2000});
        console.log(result);
  
      },
      (err) => console.log(err)
    );
}
}