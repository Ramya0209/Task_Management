import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<LogoutComponent>,private route:Router) { }
  onNoClick(){
    this.dialogRef.close();
  }
  submitfun(){
    this.dialogRef.close();
        this.route.navigate(['login']); 
        
       
  }
  ngOnInit(): void {
  }

}
