import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {LogoutComponent} from "../../auth/component/logout/logout.component"

import { IEmployee } from 'src/app/models/login.models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  isCollapsed = false;
  employee:IEmployee={
    id:0,    
    user_id:'',
    username:'',
    password:'',
    cpassword:'',
    role:'',
    email:'',
    phonenumber:'',
    dob:'',
    address:'',
    state:'',
    country:'',
    postalcode:'',
    qualification:'',
    experience:''
  }
  nameOfTheEmployee=this.employee;

  

  constructor(public dialog: MatDialog,private route:Router,private _userService:UserService) { }
 
  ngOnInit(): void {
    this.nameOfTheEmployee=this._userService.getLoggedInEmployee();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(LogoutComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
}
}