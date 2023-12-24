import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { UserGuard } from '../guards/user.guard';
import { HomeComponent } from '../shared/home/home.component';
import { ReqChangePasswordComponent } from './req-change-password/req-change-password.component';
import { ProfileComponent } from '../shared/profile/profile.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  {path:'',redirectTo:'dashboard' ,pathMatch:'full'},
  { path:"dashboard",canActivate:[AuthGuard],component:DashboardComponent,children:[
    {path:'',redirectTo:'home' ,pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'profile',component:ProfileComponent},
    {
      path:"admin",canActivate:[AdminGuard],loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
      },
      {
        path:"user",canActivate:[UserGuard],loadChildren: () => import('../user/user.module').then(m => m.UserModule)
        },
       
  ] },
  
];
@NgModule({
  declarations: [
    DashboardComponent,
    ReqChangePasswordComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
