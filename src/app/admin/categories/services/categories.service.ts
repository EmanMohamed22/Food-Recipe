import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _http:HttpClient) { }

getGategories(data:any):Observable<any>{
  return this._http.get('Category',{params:data})
}

addCategory(data:string):Observable<any>{
return this._http.post('Category',{name:data})
}
delCategory(id:number):Observable<any>{
return this._http.delete(`Category/${id}`)
}
updateCategory(id:number,data:any):Observable<any>{
return this._http.put(`Category/${id}`,{name:data})
}

}
