import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { URecepiesComponent } from './u-recepies/u-recepies.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewComponent } from './components/view/view.component';


const routes: Routes = [
  
  {path:'',component:URecepiesComponent},
  
];
@NgModule({
  declarations: [
    URecepiesComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class URecepiesModule { }
