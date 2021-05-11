import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{ IEmployee} from 'src/app/models/login.models';
import { RegisterService} from './register.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  employee:IEmployee={
    id:'',
    username:'',
    role:'',
    contactpreference:'',
    email:'',
    password:''

  }
  // id=this.employee.id
  constructor(private _registerService: RegisterService,private _snackBar: MatSnackBar,private router:Router) { }
  // isExist(id:String){
  //   this._registerService.getEmployee(this.employee.id).subscribe(
  //     (response) =>
  //     {
  //       if (!response||response.length==0)
  //       {
  //         return true
  //       }
  //       else{
  //       return false
  //       }
  //     }
  //   )
  // }
        
  // }
  hai=false;
  onSubmit(message:string,action:string){
    this._registerService.getEmployee(this.employee.id).subscribe(
      (response) =>
      {
        if (!response||response.length==0)
        {
          
          this._registerService.addEmployee(this.employee).subscribe(
            (result) =>
            {
              this._snackBar.open(message,action,{duration:1000});

              this.router.navigate(['login']);
            }
          )
        }
        else{
          
          this.hai=true;
          this.employee.id="";
          }
        },
    (err) => console.log(err)
    );
}

}
