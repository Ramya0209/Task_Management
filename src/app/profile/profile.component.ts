import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEmployee } from '../models/login.models';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
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


  constructor(private _profileService:ProfileService,private _snackbar:MatSnackBar ) { }

  ngOnInit(): void {
  }
  onSubmit(message:string,action:string,form:NgForm){
    this._profileService.updateEmployee(this.employee).subscribe(
      (result) =>
      {
        this._snackbar.open(message,action,{duration:2000})
        console.log(this.employee=result);
        // this._snackBar.open(message, action,{
        //   duration:2000
        // });
      
      },
      (err) => console.log(err)
      );
      if(form.valid){
        console.log(form.value)
      }
  }
}
