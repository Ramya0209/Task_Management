import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ResetPasswordComponent} from './component/reset-password/reset-password.component';
import { LogoutComponent } from './component/logout/logout.component';

import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { IconsProviderModule } from '../icons-provider.module';
@NgModule({
  declarations: [LoginComponent, RegisterComponent,ResetPasswordComponent, LogoutComponent],
  imports: [
    
    CommonModule,MatFormFieldModule,MatCardModule,MatButtonModule,MatIconModule,
    AuthRoutingModule,FormsModule,ReactiveFormsModule,MatInputModule,MatMenuModule,IconsProviderModule
  ],
  exports:[
    LoginComponent, RegisterComponent,ResetPasswordComponent
    
  ]
})
export class AuthModule { }
