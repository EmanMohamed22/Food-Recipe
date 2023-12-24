import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RequsetRestPasswordComponent } from '../requset-rest-password/requset-rest-password.component';
import { AuthService } from '../../services/auth.service';
import {  ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent {
  
  constructor(private _router:Router,
    public dialogRef: MatDialogRef<VerifyComponent>,
    private _auth:AuthService,
    private _toastr:ToastrService){}
  
  verifyForm= new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    code:new FormControl(null,[Validators.required])
  })
   
  onSubmit(data:FormGroup){
    console.log(data);
    
   this._auth.verifyEmail(data.value).subscribe({
   next:(res)=>{
    console.log(res);
    this._toastr.success(res.message,'success')
   },error:(err)=> {
     this._toastr.error(err.error.message,'error')
   },complete:()=> {
  
     this._router.navigate(['/auth/login']);
   
   },
    
   })
  }
  onNoClick():void{
    this.dialogRef.close();
  }
}
