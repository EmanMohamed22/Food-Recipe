import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecepiesComponent } from './recepies/recepies.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditRecipeComponent } from './components/add-edit-recipe/add-edit-recipe.component';



const routes: Routes = [
  
  {path:'',component:RecepiesComponent},
  {path:'add-edit-recipe',component:AddEditRecipeComponent},
  {path:'add-edit-recipe/:id',component:AddEditRecipeComponent},
  
  
];
@NgModule({
  declarations: [
    RecepiesComponent,
    AddEditRecipeComponent,

    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class RecepiesModule { }





