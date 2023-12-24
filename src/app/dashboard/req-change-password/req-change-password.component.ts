import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-req-change-password',
  templateUrl: './req-change-password.component.html',
  styleUrls: ['./req-change-password.component.scss']
})
export class ReqChangePasswordComponent {
  iconStatus:boolean=true;
  message:string='';
  userEmail=localStorage.getItem('email');
  hide:boolean=true;
  hide1:boolean=true;
  hide2:boolean=true;
  constructor(private _AuthService:AuthService,
    public dialogRef: MatDialogRef<ReqChangePasswordComponent>,
    private _toastr:ToastrService,
    private _router:Router
   ){
  
  }

  resetForm=new FormGroup({
    
      oldPassword:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)]),
      newPassword:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)]),
      confirmPassword:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)]),
      
   
  })
  onSubmit(data:FormGroup){
    this._AuthService.changePassword(data.value).subscribe({
      next:(res)=> {
        console.log(res);
        this.message=res.message;
      },
      error:(err)=>{
    this._toastr.error(err.error.message)
      },
      complete:()=>{
          this._router.navigate(['/auth/login'])
          this._toastr.success(this.message)
      }
      
    })
    }

    onClose():void{
      this.dialogRef.close();
    }
}
