import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';


// for table
export interface PeriodicElement {
  taskname: String;
  assignedto: string;
  progress: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {taskname: '', assignedto: '', progress: ''},
]

// for dropdown
interface Project {
  value: string;
  viewValue: string;
}



interface Manager {
value: string;
viewValue: string;
}

@Component({
selector: 'app-completion',
templateUrl: './completion.component.html',
styleUrls: ['./completion.component.scss']
})
export class CompletionComponent implements OnInit {

  // table
  displayedColumns: string[] = ['taskname','assignedto','progress'];
  dataSource = ELEMENT_DATA;
  // dropdown
  selectedValue: string;
  constructor() { }

  ngOnInit(): void {
  }

  
  
  
  
  
  // selectedValue: string;

  projects: Project[] = [
    {value: 'project 1', viewValue: 'Project 1'},
    {value: 'project 2', viewValue: 'Project 2'},
    {value: 'project 3', viewValue: 'Project 3'}
  ];

//   constructor() { }

//   ngOnInit(): void {
//   }

 }


