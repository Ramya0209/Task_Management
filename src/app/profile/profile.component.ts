import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEmployee } from '../models/login.models';
import { UserService } from '../services/user.service';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  

 
  loggedInEmployee:IEmployee;

 


  constructor(private _profileService:ProfileService,private _snackbar:MatSnackBar ,private _userService:UserService) { }

  ngOnInit(): void {
  
    this.loggedInEmployee=this._userService.getLoggedInEmployee();
  }
  onSubmit(message:string,action:string){
    this._profileService.updateEmployee(this.loggedInEmployee).subscribe(
      (result) =>
      {
        this._snackbar.open(message,action,{duration:2000})
        console.log(result);
        // this._snackBar.open(message, action,{
        //   duration:2000
        // });
      
      },
      (err) => console.log(err)
      );
      
  }
}
