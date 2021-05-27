import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import {LogoutComponent} from "../../auth/component/logout/logout.component"

import { IEmployee } from 'src/app/models/login.models';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isCollapsed = false;

  constructor(public dialog: MatDialog,private _userService:UserService) { }

  employee:IEmployee={
    id:'',
    username:'',
    password:'',
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
