import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RequsetRestPasswordComponent } from './components/requset-rest-password/requset-rest-password.component';
import { RestPasswordComponent } from './components/rest-password/rest-password.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyComponent } from './components/verify/verify.component';

const routes: Routes = [
  {path:'',redirectTo:'login' ,pathMatch:'full'},
  { path:"login",component:LoginComponent },
  { path:"register",component:RegisterComponent },
  { path:"reset-password",component:RestPasswordComponent },
];

@NgModule({
  declarations: [
    LoginComponent,
    RequsetRestPasswordComponent,
    RestPasswordComponent,
    RegisterComponent,
    VerifyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AuthModule { }
