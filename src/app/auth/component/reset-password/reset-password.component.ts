import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/login.models';
import { ResetPasswordService } from './reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  employee:IEmployee={
    id:0,
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
    experience:'',
cpassword:''

  }
  constructor(private _resetPassword:ResetPasswordService) { }

  ngOnInit(): void {
  }
onSubmit(){
  this._resetPassword.getEmployee(this.employee.id).subscribe(
    (response)=>{
      console.log(response);
if(!response || response.length==0){
  window.alert("password Incorrect");
}else{
  this._resetPassword.updatePassword(this.employee).subscribe(
    (result)=>{
      console.log(result);
    }
  )
}
    },
    (err)=>console.log(err)
  );
}
}
