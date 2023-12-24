import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ReqChangePasswordComponent } from 'src/app/dashboard/req-change-password/req-change-password.component';
import { Imenu } from 'src/app/interfaces/imenu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  isOpened:boolean=false;
  @Output() toggle=new EventEmitter<boolean>();
  
  constructor(private _auth:AuthService,private _router:Router,
    public dialog: MatDialog){

  }
  toggleIcon(){
    this.isOpened=!this.isOpened;
    this.toggle.emit(this.isOpened )
  }
isAdmin():boolean{
  if (this._auth.role == 'SuperAdmin') {
    return this._auth.role == 'SuperAdmin'
  }else{
    return false
  }
}
isUser():boolean{
  if (this._auth.role == 'SystemUser') {
    return true
  }else{
    return false
  }
}

  menu:Imenu[]=[
    { icon:'fa-solid fa-house',
    title:'home',
    link:'/dashboard/dashboard/home',
    isActive:this.isUser()|| this.isAdmin()
  },
    { icon:'fa-solid fa-user-group',
    title:'users',
    link:'/dashboard/dashboard/admin/users',
    isActive:this.isAdmin()
  },
    { icon:'fa-solid fa-utensils',
    title:'recepies',
    link:'/dashboard/dashboard/admin/recepies',
    isActive:this.isAdmin()
  },
    { icon:'fa-solid fa-calendar-days',
    title:'categories',
    link:'/dashboard/dashboard/admin/categories',
    isActive:this.isAdmin()
  },
    { icon:'fa-solid fa-plate-wheat',
    title:'user recepies',
    link:'/dashboard/dashboard/user/u-recepies',
    isActive:this.isUser()
  },
    { icon:'fa-solid fa-heart',
    title:'favorites',
    link:'/dashboard/dashboard/user/favorites',
    isActive:this.isUser()
  },
  
  ]

  openDialog(): void {
    const dialogRef = this.dialog.open(ReqChangePasswordComponent, {
      data: {},
      width:'40%'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      // if(result){
      //   this.onRequestRestPassword(result)
      // }
      
    });
  }
  // /////////
  logout(){
    localStorage.removeItem('userToken');
    this._router.navigate(['/auth'])
  }
}
