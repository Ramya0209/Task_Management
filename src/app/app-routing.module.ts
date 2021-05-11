import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Admin_Module/admin/admin.component';
import { EmployeeComponent } from './Employee_Module/employee/employee.component';
import { ManagerDashboardComponent } from './Manager_Module/manager-dashboard/manager-dashboard.component';
import { ManagerComponent } from './Manager_Module/manager/manager.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminDashboardComponent} from './Admin_Module/admin-dashboard/admin-dashboard.component'
import { EmployeeDashboardComponent} from './Employee_Module/employee-dashboard/employee-dashboard.component';
import { CreatetaskComponent } from './Manager_Module/createtask/createtask.component';
import { ViewprojectComponent } from './Manager_Module/viewproject/viewproject.component';
import { CreateProjectComponent } from './Admin_Module/createproject/createproject.component';
import {CompletionComponent} from './Admin_Module/completion/completion.component';
import {AdminreportComponent} from './Admin_Module/adminreport/adminreport.component';
import {ManagerreportComponent} from './Manager_Module/managerreport/managerreport.component'
// import { HeaderComponent } from './shared/components/header/header.component';
import {LoginComponent} from './auth/component/login/login.component';
import {EmpReportComponent} from  './Employee_Module/emp-report/emp-report.component';
import { ViewprojectAdminComponent } from './Admin_Module/viewproject-admin/viewproject-admin.component';
import { EmpTaskComponent } from './Employee_Module/emp-task/emp-task.component';
import { EmpreportComponent } from './Manager_Module/empreport/empreport.component';

const routes: Routes = [
  {
    path:'admin',component:AdminComponent,
    children: [
      { path:'',component:AdminDashboardComponent},
      {path: 'admindashboard', component:AdminDashboardComponent },
      {path: 'profile', component:ProfileComponent },
      {path: 'assignproject', component:CreateProjectComponent },
      {path: 'viewproject', component: ViewprojectAdminComponent},
      {path: 'adminreport', component:AdminreportComponent },
      {path: 'completion', component:CompletionComponent },  
    ]
  },  
{
  path: 'manager',component: ManagerComponent,
  children: [
    
    {path: 'managerdashboard', component:ManagerDashboardComponent },
    {path:'profile',component:ProfileComponent},
    {path:'viewproject',component:ViewprojectComponent},
    {path:'newtask',component:CreatetaskComponent },
    {path:'managerreport',component:ManagerreportComponent},
    {path:'empreport',component:EmpreportComponent},
    { path:'',component:ManagerDashboardComponent},
  ]
},




{
  path:'employee',component:EmployeeComponent,
  children: [
    { path:'',component:EmployeeDashboardComponent},
    {path: 'employeedashboard', component:EmployeeDashboardComponent },
    {path: 'profile', component:ProfileComponent },
    {path:'task' ,component:EmpTaskComponent},
    {path:'report',component:EmpReportComponent}
  ]
},

{
  path:'',component:LoginComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
