import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEmployee } from '../models/login.models';
// import { IPassword } from '../models/password.models';
import { UserService } from '../services/user.service';
import { ChangepassService } from './changepass.service';

// export interface IPassword extends IEmployee{
// newpassword:string;
// }

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.scss']
})
export class ChangepassComponent implements OnInit {
  
  pass:IEmployee;
  oldpassword='';
// password:IPassword;
newpass='';
  constructor(private _userService:UserService,private _cpass:ChangepassService,private _snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.pass=this._userService.getLoggedInEmployee();
    this.oldpassword=this.pass.password;
    this.pass.password='';
    this.newpass=this.pass.newpassword!;
    this.pass.newpassword='';
  }
onSubmit(message:string,action:string){
  // this.password=this.convertIEmployeeToIPassword(this.pass);

  this._cpass.getEmployee(this.pass.id,this.pass.password).subscribe(
    (response) =>
    {
      if(!response || response.length==0){
        window.alert("correct password");
      }
      else{
        this.pass=this.convertpasswordToNewPassword(this.pass);
       
        this._cpass.updatePassword(this.pass).subscribe(
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

convertpasswordToNewPassword(pass:IEmployee){

  pass.password=pass.newpassword!;

  return pass;

}
// convertIEmployeeToIPassword(pass:IEmployee):IPassword{
//   let password!:IPassword;
//   password.id=pass.id;
//   return password;
// }
}
