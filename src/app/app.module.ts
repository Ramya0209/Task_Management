import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatListModule} from '@angular/material/list';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { ManagerComponent } from './Manager_Module/manager/manager.component';
import { ManagerDashboardComponent } from './Manager_Module/manager-dashboard/manager-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import {  AdminComponent} from './Admin_Module/admin/admin.component';
import { EmployeeComponent } from './Employee_Module/employee/employee.component';
import { AdminDashboardComponent } from './Admin_Module/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './Employee_Module/employee-dashboard/employee-dashboard.component';
import { EmpreportComponent } from './Manager_Module/empreport/empreport.component';
import { CreatetaskComponent } from './Manager_Module/createtask/createtask.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule } from '@angular/material/table';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ViewprojectComponent } from './Manager_Module/viewproject/viewproject.component';
import {AuthModule} from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { CreateProjectComponent } from './Admin_Module/createproject/createproject.component';
import { CompletionComponent } from './Admin_Module/completion/completion.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {AdminreportComponent} from './Admin_Module/adminreport/adminreport.component';
import { ManagerreportComponent } from './Manager_Module/managerreport/managerreport.component';
import { LoginService } from './auth/component/login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { EmpTaskComponent} from './Employee_Module/emp-task/emp-task.component'
import { EmpReportComponent } from './Employee_Module/emp-report/emp-report.component';
// import { EmpProjectComponent } from './emp-project/emp-project.component';
// import { EmpReportComponent } from  './emp-report/emp-report.component';
// import { MatSnackBarModule} from '@angular/material/snack-bar';
import { ViewprojectAdminComponent } from './Admin_Module/viewproject-admin/viewproject-admin.component';



@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    ManagerDashboardComponent,
    ProfileComponent,
    AdminComponent,
    EmployeeComponent,
    AdminDashboardComponent,
    EmployeeDashboardComponent,
    EmpreportComponent,
    CreatetaskComponent,
    ViewprojectComponent,
    CreateProjectComponent,
    ManagerreportComponent,
    EmpReportComponent,
    CompletionComponent,
    AdminreportComponent,
    ViewprojectAdminComponent,
    EmpTaskComponent
    // EmpProjectComponent,
    // EmpReportComponent
    
  ],
  imports: [
    BrowserModule,AuthModule,SharedModule,MatSelectModule,MatSnackBarModule,
    AppRoutingModule,FlexLayoutModule,MatGridListModule,ReactiveFormsModule,
    FormsModule,MatCardModule,MatInputModule,MatFormFieldModule,MatTableModule ,MatRadioModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,
    MatButtonModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatListModule,BrowserAnimationsModule,HttpClientModule,
    
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
