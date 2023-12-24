import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requset-rest-password',
  templateUrl: './requset-rest-password.component.html',
  styleUrls: ['./requset-rest-password.component.scss']
})
export class RequsetRestPasswordComponent {
email:string=''
constructor(private _router:Router,
  public dialogRef: MatDialogRef<RequsetRestPasswordComponent>){}

requestEmail= new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
})

onNoClick():void{
  this.dialogRef.close();
}

}
