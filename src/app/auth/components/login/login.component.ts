import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {  FormGroup, Validators ,FormControl} from '@angular/forms';
import { RequsetRestPasswordComponent } from '../requset-rest-password/requset-rest-password.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

constructor(private _AuthService:AuthService,
  public dialog: MatDialog,
  private _toastr:ToastrService,
  private _router:Router
 ){

}
  ngOnInit(): void {
    
    
  }
message:string='';
hide:boolean=true;



loginForm= new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)])
  })


onSubmit(data:FormGroup){
console.log(data);

this._AuthService.handleLogin(data.value).subscribe({
  next:(res)=>{
    console.log(res);
    localStorage.setItem('userToken',res.token);
    this._AuthService.getUserToken()
  },
  error:(err:any)=>{
    console.log(err.error.message);
    
   this._toastr.error(err.error.message,'error')
},
complete:()=> {
  
  this._toastr.success('success');
   this._router.navigate(['/dashboard/dashboard'])
},
})

}


// pop up reequest reset password
openDialog(): void {
  const dialogRef = this.dialog.open(RequsetRestPasswordComponent, {
    data: {},
    width:'40%'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
    if(result){
      this.onRequestRestPassword(result)
    }
    
  });
}



onRequestRestPassword(email:string){
 
  this._AuthService.requestResetPassword(email).subscribe({
    next:(res)=>{
      console.log(res);
      this.message=res.message;
    
    },
    error:(err)=>{
      console.log(err.error.message);
      
this._toastr.error(err.error.message)
    },
    complete:()=>{
        this._router.navigate(['/auth/reset-password'])
        this._toastr.success(this.message)
        localStorage.setItem('email',email)
    }
  })
}

}



