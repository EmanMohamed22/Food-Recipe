import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rest-password',
  templateUrl: './rest-password.component.html',
  styleUrls: ['./rest-password.component.scss']
})
export class RestPasswordComponent {
  iconStatus:boolean=true;
  message:string='';
  userEmail=localStorage.getItem('email');
  hide:boolean=true;
  hide1:boolean=true;
  constructor(private _AuthService:AuthService,
   
    private _toastr:ToastrService,
    private _router:Router
   ){
  
  }

resetForm=new FormGroup({
  email:new FormControl(this.userEmail,[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)]),
    confirmPassword:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)]),
    seed:new FormControl(null,[Validators.required])
 
})

onSubmit(data:FormGroup){
this._AuthService.resetPassword(data.value).subscribe({
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
}
