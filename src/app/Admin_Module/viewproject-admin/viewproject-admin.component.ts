import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/project.models';
import { ViewprojectAdminService } from '../viewproject-admin/viewproject-admin.service';
// import { ViewprojectadService } from './viewprojectad.service';
import {MatDialog} from '@angular/material/dialog';
import {CreateProjectComponent} from '../createproject/createproject.component';
import { MatFormFieldControl } from '@angular/material/form-field';
@Component({
  selector: 'app-viewproject-admin',
  templateUrl: './viewproject-admin.component.html',
  styleUrls: ['./viewproject-admin.component.scss'],
  providers: [
    { provide: MatFormFieldControl, useExisting: ViewprojectAdminComponent }   
   ]  
})
export class ViewprojectAdminComponent implements OnInit {
  displayedColumns: string[] = ['projectname', 'startdate','enddate', 'priority','description','action'];
  dataSource!:IProject[];
  
  
  constructor(private _vps:ViewprojectAdminService,public dialog: MatDialog) { }
  

  ngOnInit(): void {
    this.getViewProject();
    }
    getViewProject(){
    this._vps.getProject().subscribe(
      (response) =>
      {
        this.dataSource=response;
      },
      (err) => console.log(err)
      );
    }

    openDialog(): void {
      const dialogRef = this.dialog.open(CreateProjectComponent);
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
  
      });
}
}
