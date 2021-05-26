import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private route:Router,private _userService:UserService) { }

  ngOnInit(): void {
    this.nameOfTheEmployee=this._userService.getLoggedInEmployee();
  }
logout(){
  this.route.navigate(['/login']);
}
}
