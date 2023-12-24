import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  user:any;


  constructor(private _helper:HelperService){
  this.getUserProfile()
  }
  ngOnInit(): void {
   
  }
  getUserProfile(){
  this._helper.getCurrentUser().subscribe({
    next:(res)=>{
      console.log(res);
      this.user=res
    },error:(err)=>{

    },complete:()=> {
      
    },
  })
  }
  
}
