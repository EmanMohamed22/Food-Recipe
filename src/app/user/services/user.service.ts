import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  onAddToFavs(id:number):Observable<any>{
    return this._http.post('userRecipe',{recipeId:id})
  }

  getFavs():Observable<any>{
    return this._http.get('userRecipe/')
  }

  deleteFav(id:number):Observable<any>{
    return this._http.delete(`userRecipe/${id}`)
  }
}
