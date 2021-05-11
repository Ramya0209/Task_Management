import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/project.models';
import { ViewprojectAdminService } from '../viewproject-admin/viewproject-admin.service';
// import { ViewprojectadService } from './viewprojectad.service';

@Component({
  selector: 'app-viewproject-admin',
  templateUrl: './viewproject-admin.component.html',
  styleUrls: ['./viewproject-admin.component.scss']
})
export class ViewprojectAdminComponent implements OnInit {
  displayedColumns: string[] = ['projectname', 'startdate', 'enddate', 'priority','description'];
  dataSource!:IProject[];
  
  constructor(private _vps:ViewprojectAdminService) { }
  

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
}
