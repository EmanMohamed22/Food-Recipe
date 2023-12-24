import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SharedModule } from '../shared/shared.module';



const routes: Routes = [
  {path:'',component:UserComponent},
 
    {
      path:"favorites",loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule)
      },
      {
        path:"u-recepies",loadChildren: () => import('./u-recepies/u-recepies.module').then(m => m.URecepiesModule)
        }
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class UserModule { }
