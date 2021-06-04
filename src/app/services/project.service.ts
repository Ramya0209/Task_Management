import { Injectable } from '@angular/core';
import { IProject } from '../models/project.models';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
editProject:IProject;
  constructor() { }
  seteditProject(editProject){
    this.editProject=editProject;
  }
  geteditProject(){
    return this.editProject;
  }
}
