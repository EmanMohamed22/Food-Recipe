import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit{

  favorites:any;

constructor(private _user:UserService,private _toastr:ToastrService){

}
  ngOnInit(): void {
    this.getAllFavs()
  }


onAddToFav(data:any){
  this._user.onAddToFavs(data).subscribe({
    next:(res)=> {
      console.log(res);
      this.getAllFavs()
    },
  })
}

getAllFavs(){
  this._user.getFavs().subscribe({
    next:(res)=> {
      console.log(res.data);
      this.favorites=res.data
    },
  })
}

deleteOneFav(data:number){
this._user.deleteFav(data).subscribe({
  next:(res)=> {
    console.log(res);

  },error:(err)=> {
    
  },complete:()=> {
    this._toastr.success('Recipe deleted')
    this.getAllFavs()
  },
})
}
}
