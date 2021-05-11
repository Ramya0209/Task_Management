import { Component } from '@angular/core';
import { LoginService} from './login.service';
import { Router} from '@angular/router';
import { IEmployee} from 'src/app/models/login.models';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl,FormBuilder,FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
  export class LoginComponent {
  form:FormGroup;
  
  employee:IEmployee={
    id:'',
    username:'',
    role:'',
    contactpreference:'',
    email:'',
    password:''

  }
  
  
     
constructor(public _loginService: LoginService,private _snackBar: MatSnackBar,
  private route:Router,private fb:FormBuilder) 
  {
    this.form=this.fb.group({
      id : new FormControl("",[Validators.required])

    })
  }

   onSubmit(message:string,action:string){
    

  this._loginService.getEmployee(this.employee.id,this.employee.password).subscribe(
    (response) =>
    {
      if (!response||response.length==0)
      {
        window.alert("UserId or Password Incorrect");
        this.employee.id="";
        this.employee.password="";
      }
      else{
        
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
}
}
