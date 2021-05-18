// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: '/welcome' },
//   { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Admin_Module/admin/admin.component';
import { EmployeeComponent } from './Employee_Module/employee/employee.component';
import { ManagerDashboardComponent } from './Manager_Module/manager-dashboard/manager-dashboard.component';
import { ManagerComponent } from './Manager_Module/manager/manager.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminDashboardComponent} from './Admin_Module/admin-dashboard/admin-dashboard.component'
import { EmployeeDashboardComponent} from './Employee_Module/employee-dashboard/employee-dashboard.component'
import { CreatetaskComponent } from './Manager_Module/createtask/createtask.component';
import { ViewprojectComponent } from './Manager_Module/viewproject/viewproject.component';
import { CreateProjectComponent } from './Admin_Module/createproject/createproject.component';
import {CompletionComponent} from './Admin_Module/completion/completion.component';
import {AdminreportComponent} from './Admin_Module/adminreport/adminreport.component';
import {ManagerreportComponent} from './Manager_Module/managerreport/managerreport.component'
// import { HeaderComponent } from './shared/components/header/header.component';
import {LoginComponent} from './auth/component/login/login.component';
import {EmpReportComponent} from  './Employee_Module/emp-report/emp-report.component';
import {EmpTaskComponent} from './Employee_Module/emp-task/emp-task.component';
import { ViewprojectAdminComponent} from './Admin_Module/viewproject-admin/viewproject-admin.component';
const routes: Routes = [
  {
    path:'admin',component:AdminComponent,
    children: [
      { path:'',component:AdminDashboardComponent},
      {path: 'admindashboard', component:AdminDashboardComponent },
      {path: 'profile', component:ProfileComponent },
      {path: 'viewprojectadmin', component:ViewprojectAdminComponent },
      {path: 'adminreport', component:AdminreportComponent },
      {path: 'completion', component:CompletionComponent },  
    ]
  },  
{
  path: 'manager',component: ManagerComponent,
  children: [
    
    {path: 'managerdashboard', component:ManagerDashboardComponent },
    {path:'profile',component:ProfileComponent},
    {path:'newtask',component:CreatetaskComponent },
    {path:'viewproject',component:ViewprojectComponent},
    {path:'managerreport',component:ManagerreportComponent},
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
  exports: [RouterModule],
  entryComponents:[ViewprojectAdminComponent,CreatetaskComponent]
})
export class AppRoutingModule { }


