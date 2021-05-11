import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  id: string;
  taskname: String;
  progress: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: '', name: '', taskname: '', progress: ''},
  {id: '', name: '', taskname:'', progress: ''},
  {id: '', name: '', taskname:'', progress: ''},
  {id: '', name: '', taskname:'', progress: ''},
  {id: '', name: '', taskname:'', progress: ''}
]
@Component({
  selector: 'app-empreport',
  templateUrl: './empreport.component.html',
  styleUrls: ['./empreport.component.scss']
})
export class EmpreportComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'taskname', 'progress'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}


