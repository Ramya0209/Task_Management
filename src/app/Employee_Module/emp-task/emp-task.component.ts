import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  id: string;
  Projectname: string;
  position: number;
  Taskname: string;
  Start_date : string;
  End_date: string;
  Priority:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, id: '',Projectname: '', Taskname: '',Start_date:' ',End_date:'',Priority:''},
  {position: 2, id: '',Projectname: '', Taskname: '',Start_date:' ',End_date:'',Priority:''},
  {position: 3, id: '',Projectname: '', Taskname: '',Start_date:' ',End_date:'',Priority:''},
  {position: 4, id: '',Projectname: '', Taskname: '',Start_date:' ',End_date:'',Priority:''},
  {position: 5, id: '',Projectname: '', Taskname: '',Start_date:' ',End_date:'',Priority:''},
  
];
@Component({
  selector: 'app-emp-task',
  templateUrl: './emp-task.component.html',
  styleUrls: ['./emp-task.component.scss']
})
export class EmpTaskComponent implements OnInit {
   
    displayedColumns: string[] = ['position','id', 'Projectname', 'Taskname','Start_Date','End_date','Priority'];
    dataSource = ELEMENT_DATA;
  

  constructor() { }

  ngOnInit(): void {
    
    
}

}