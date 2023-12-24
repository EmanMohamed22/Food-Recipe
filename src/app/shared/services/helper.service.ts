import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private _http:HttpClient) { }
  getGategories():Observable<any>{
    return this._http.get('Category',{params:{pageSize:100}})
  }
  getTags():Observable<any>{
    return this._http.get('tag')
  }
  getRecipesById(id:number):Observable<any>{
    return this._http.get(`Recipe/${id}`)
  }
  getCurrentUser():Observable<any>{
    return this._http.get('Users/currentUser')
  }
  updateProfile(data:any):Observable<any>{
    return this._http.put('Users',data)
  }
}
