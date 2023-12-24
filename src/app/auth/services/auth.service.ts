import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ilogin } from 'src/app/interfaces/ilogin';
import { Observable } from 'rxjs';
import { Ireset } from 'src/app/interfaces/ireset';
import { jwtDecode } from 'jwt-decode';
import { Ichange } from 'src/app/interfaces/ichange';
import { IVerify } from 'src/app/interfaces/verify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
role:string | null='';

  constructor(private _HttpClient:HttpClient) {
    if(localStorage.getItem('userToken')!==null){
       this.getUserToken()
    }
   }


  handleLogin(data:Ilogin):Observable<any>{
    return this._HttpClient.post('Users/Login',data)
  }
  handleRegister(data:any):Observable<any>{
    return this._HttpClient.post('Users/Register',data)
  }
  verifyEmail(data:IVerify):Observable<any>{
    return this._HttpClient.put('Users/verify',data)
  }

  requestResetPassword(data:string):Observable<any>{
    return this._HttpClient.post('Users/Reset/Request',{email:data})
  }

  resetPassword(data:Ireset):Observable<any>{
    return this._HttpClient.post('Users/Reset',data)
  }
  changePassword(data:Ichange):Observable<any>{
    return this._HttpClient.put('Users/Reset',data)
  }

  getUserToken(){
    let encoded:any=localStorage.getItem('userToken');
  let decoded:any =jwtDecode(encoded);
  console.log(decoded);
 
  localStorage.setItem('userName',decoded.userName);
  localStorage.setItem('role',decoded.userGroup);
this.getRole()
  
  }
  getRole(){
    if (localStorage.getItem('userToken')!==null&&localStorage.getItem('role')) {
      this.role= localStorage.getItem('role');
    }
  }
}
