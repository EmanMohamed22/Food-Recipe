import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  
  {path:'',component:AdminComponent},
  {
    path:"categories",loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
    },
    {
      path:"users",loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
    {
      path:"recepies",loadChildren: () => import('./recepies/recepies.module').then(m => m.RecepiesModule)
      },

];
@NgModule({
  declarations: [
    
  
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AdminModule { }
