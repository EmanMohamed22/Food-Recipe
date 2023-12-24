import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HelperService } from '../services/helper.service';
import { Iregister } from 'src/app/interfaces/iregister';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private _toastr:ToastrService,
    private _router:Router,
    private _helper:HelperService
   ){
  
  }
  message:string='';
  hide2:boolean=true;
  imgSrc:any;
  roleData:any; 
  

  ngOnInit():void{
    this.getCurentprofile()
  }


  onSubmit(data:FormGroup){
let myData = new FormData();
myData.append('userName',data.value.userName)
myData.append('email',data.value.email);
  myData.append('country',data.value.country);
  myData.append('phoneNumber',data.value.phoneNumber);
  myData.append('password',data.value.password);
  myData.append('confirmPassword',data.value.confirmPassword);
  myData.append('profileImage',this.imgSrc,this.imgSrc.name);


  this._helper.updateProfile(myData).subscribe({
    next:(res)=>{
      console.log(res);
      this._toastr.success('Profile Updated')
    },error:(err)=> {
      this._toastr.error(err.error.message)

      console.log(err);
      
    },complete:()=>{
        this._router.navigate(['/dashboard/dashboard/home'])
        this.getCurentprofile()
    
    }
  })
  }
  getCurentprofile(){
    this._helper.getCurrentUser().subscribe({
      next:(res)=>{
        console.log(res);
        this.roleData=res
      },error:(err)=>{
        this._toastr.error('error')
    },complete:()=> {
      this.imgSrc='https:upskilling-egypt.com/'+ this.roleData?.profileImage
      this.profileForm.patchValue({
      userName:this.roleData?.userName,
      email:this.roleData.email,
      country:this.roleData.country,
      phoneNumber:this.roleData.phoneNumber,
      password:this.roleData.password,
      confirmPassword:this.roleData.confirmPassword,
      profileImage:this.roleData.profileImage
     
      
      })
    }
    })}


    profileForm=new FormGroup({
      userName:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-z]{2,10}[0-9]{1,5}$/)]),
      email:new FormControl(null,[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      country:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z]{2,20}$/)]),
      phoneNumber:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
      password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)]),
      confirmPassword:new FormControl(null,[Validators.required]  ),
      profileImage:new FormControl(null)
    
      }, 
        {validators:this.createConfirmation}
       )
  
  createConfirmation(form:any){
    console.log(form);
let pswrd=form?.get('password');
let confirmPswrd=form?.get('confirmPassword');
if (pswrd?.value == confirmPswrd?.value) {
  return null
} else {
  confirmPswrd?.setErrors({invalid:'notMatch'});
  return {invalid:'notMatch'}
  }
}

  files: File[] = [];

onSelect(event:any) {
  console.log(event);
  this.imgSrc=event.addedFiles[0]
  this.files.push(...event.addedFiles);
}

onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}


}
