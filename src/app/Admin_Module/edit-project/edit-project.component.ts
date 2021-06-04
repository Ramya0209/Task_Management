import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { IProject } from 'src/app/models/project.models';
import { ProjectService } from 'src/app/services/project.service';



@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
  editProject:IProject;
  constructor(public dialogRef1:MatDialogRef<EditProjectComponent,any>,private _editProjectService:ProjectService) { }
  onNoClick(){
    this.dialogRef1.close();
  }
  ngOnInit(): void {
    this.editProject=this._editProjectService.geteditProject();
  }

}
