import { Component } from '@angular/core';
import { LoginService} from './login.service';
import { Router} from '@angular/router';
import { IEmployee} from 'src/app/models/login.models';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl,FormBuilder,FormGroup, Validators, NgForm} from "@angular/forms";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
  export class LoginComponent {
  form:FormGroup;
  
  employee:IEmployee={
    id:0,
    dob:'',
    username:'',
    password:'',
    cpassword:"",
    role:'',
    email:'',
    phonenumber:'',
    address:'',
    state:'',
    country:'',
    postalcode:'',
    qualification:'',
    experience:''

  }
  
  
     
constructor(public _loginService: LoginService,private _snackBar: MatSnackBar,private route:Router,private _userService:UserService){}
  

   onSubmit(message:string,action:string,form:NgForm){
    

  this._loginService.getEmployee(this.employee.email,this.employee.password).subscribe(
    (response) =>
    {
      if (!response||response.length==0)
      {
        window.alert("EMail or Password Incorrect");
        this.employee.email="";
        this.employee.password="";
      }
      else{
        this._userService.setLoggedInEmployee(response[0]);
        
        this.employee=response[0];
        this._snackBar.open(message,action,{duration:2000});
        var Role:string=this.employee.role.toLowerCase();
        switch(Role){
          case "admin":
            this.route.navigate(['/admin']);
            break;
          case "manager":
            this.route.navigate(["/manager"]);
            break;
          case "employee":
            this.route.navigate(["/employee"]);
            break;
         
        }

      }
    },
    (err) => console.log(err)
    );
    if(form.valid){
      console.log(form.value)
    }
}
}
