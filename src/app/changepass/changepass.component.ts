import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../models/login.models';
import { UserService } from '../services/user.service';
import { ChangepassService } from './changepass.service';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.scss']
})
export class ChangepassComponent implements OnInit {
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
  pass=this.employee;

  constructor(private _userService:UserService,private _cpass:ChangepassService) { }

  ngOnInit(): void {
    this.pass=this._userService.getLoggedInEmployee();
  }
onSubmit(){
  this._cpass.updateEmployee(this.employee).subscribe(
    (response) =>
    {
      this.employee=response;
    },
    (err) => console.log(err)
  );
}
}
