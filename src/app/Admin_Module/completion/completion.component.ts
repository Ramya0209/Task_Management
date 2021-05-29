import { Component, OnInit } from '@angular/core';

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

  managers: Manager[] = [
    {value: 'manager-0', viewValue: 'Manager1'},
    {value: 'manager2-1', viewValue: 'Manager2'},
    {value: 'manager3-2', viewValue: 'Manager3'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
