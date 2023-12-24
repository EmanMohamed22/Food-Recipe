import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { VerifyComponent } from '../verify/verify.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService,
    public dialog: MatDialog,
    private _toastr:ToastrService,
    private _router:Router
   ){
  
  }
  message:string='';
  hide2:boolean=true;
  imgSrc:any;
  registerform= new FormGroup({
    userName:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-z]{3,10}[0-9]{1,5}$/)]),
      email:new FormControl(null,[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      country:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z]{2,20}$/)]),
      phoneNumber:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
      password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)]),
      confirmPassword:new FormControl(null,[Validators.required]  ),
      profileImage:new FormControl(null,[Validators.required])
    
      },  {validators:this.creatConfirmation})
  
  creatConfirmation(form:any){
let pswrd=form?.get('password');
let confirmPswrd=form?.get('confirmPassword');
if (pswrd?.value == confirmPswrd?.value) {
  return null
} else {
  confirmPswrd?.setErrors({invalid:'notMatch'});
  return {invalid:'notMatch'}
}

  }
  onSubmit(data:FormGroup){
  console.log(data.value);
   let myData = new FormData;
   let myMap = new Map(Object.entries(data.value));
  //  for (let [key,valu] of myMap) {
  //   console.log([key,valu]);
  //   myData.append(key,data.value[key]) 
    
  //  }
  //  myData.append('profileImage',this.imgSrc,this.imgSrc.name);
   myData.append('userName',data.value.userName);
  myData.append('email',data.value.email);
  myData.append('country',data.value.country);
  myData.append('phoneNumber',data.value.phoneNumber);
  myData.append('password',data.value.password);
  myData.append('confirmPassword',data.value.confirmPassword);
  myData.append('profileImage',this.imgSrc,this.imgSrc.name);
   
   console.log(myData);
   
  this._AuthService.handleRegister(myData).subscribe({
    next:(res)=>{
      console.log(res);
      this._toastr.success(res.message,'success');
     
    },
    error:(err:any)=>{
      console.log(err.error.message);
     
     this._toastr.error(err.error.message,'error')
  },
  complete:()=> {
    
   this.openDialog()
   
  },
  
  })
  
  }
  
  // pop up reequest reset password
  openDialog(): void {
    const dialogRef = this.dialog.open(VerifyComponent, {
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
  

  files: File[] = [];

onSelect(event:any) {
  console.log(event);
  this.imgSrc=event.addedFiles[0]
  console.log(event.addedFiles[0]);
  
  this.files.push(...event.addedFiles);
 this.registerform.get('profileImage')?.setValue(this.imgSrc)
}

onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}



}
