import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatetaskComponent } from '../createtask/createtask.component';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.scss']
})
export class ViewtaskComponent implements OnInit {
  displayedColumns: string[] = ['projectname', 'startdate', 'enddate', 'priority','description'];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CreatetaskComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
}
}
