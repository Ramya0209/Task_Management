import { Injectable } from '@angular/core';
import { IEmployee } from '../models/login.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedInEmployee:IEmployee;
  constructor() { }
  setLoggedInEmployee(loggedInEmployee){
    this.loggedInEmployee=loggedInEmployee
      
  }
  getLoggedInEmployee(){
    return this.loggedInEmployee;
  }
}
