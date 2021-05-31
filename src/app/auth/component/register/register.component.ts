import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{ IEmployee} from 'src/app/models/login.models';
import { RegisterService} from './register.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import {FormControl,Validators} from "@angular/forms"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  employee:IEmployee={
    id:'',
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
  unamePattern = "[a-zA-Z ]*"; 
  phonePattern = "[0-9 ]*";
  emailFormControl=new FormControl("",[
    Validators.required,
    Validators.email
  ])
  constructor(private _registerService: RegisterService,private _snackBar: MatSnackBar,private router:Router) { }
  passcheck=false;
  userid=false;
  onSubmit(message:string,action:string,form:NgForm){
    this._registerService.getEmployee(this.employee.id).subscribe(
      (response) =>
      {
        if (!response||response.length==0)
        {
         
          this._registerService.addEmployee(this.employee).subscribe(
            (result) =>
            {
              if(this.employee.password==this.employee.cpassword)
              {
              this._snackBar.open(message,action,{duration:1000});

              this.router.navigate(['login']);
              }
              else
              {
                this.passcheck=true;
                this.employee.password="";
                this.employee.cpassword='';
              }
            }
          )
        }
        else{
          
          this.userid=true;
          this.employee.id="";
          }
        },
    (err) => console.log(err)
    );
    if(form.valid){
      console.log(form.value)
    }
}

}
