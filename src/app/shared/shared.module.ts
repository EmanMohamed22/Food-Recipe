import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DeleteComponent } from './delete/delete.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    DeleteComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    RouterModule,
   MatPaginatorModule,
   NgxDropzoneModule

  ],
  exports:[
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    MatPaginatorModule,
    NgxDropzoneModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SharedModule { }
