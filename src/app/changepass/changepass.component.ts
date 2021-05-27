import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEmployee } from '../models/login.models';
import { UserService } from '../services/user.service';
import { ChangepassService } from './changepass.service';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.scss']
})
export class ChangepassComponent implements OnInit {
  
  pass:IEmployee;
  

  constructor(private _userService:UserService,private _cpass:ChangepassService,private _snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.pass=this._userService.getLoggedInEmployee();
  }
onSubmit(message:string,action:string){
  this._cpass.getEmployee(this.pass.id,this.pass.password).subscribe(
    (response) =>
    {
      if(!response || response.length==0){
        window.alert("correct password");
      }
      else{
        this._cpass.updatePassword(this.pass.id,this.pass.password).subscribe(
          (result)=>{
            this._snackbar.open(message,action,{duration:2000});
            console.log(result);
          }
        )
      }
    },
    (err) => console.log(err)
  )
  
}
}
