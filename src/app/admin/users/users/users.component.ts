import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { PageEvent } from '@angular/material/paginator';

import { HelperService } from 'src/app/shared/services/helper.service';
import { UsersService } from '../services/users.service';
import { IGroup, ITableUsers, IUsers } from '../interfaces/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  searchValue:string='';
  pageSize:number=50;
pageNumber:number | undefined=1;
tableResponse:ITableUsers | undefined;
// tableData:IUsers[] =[];
tableData:any;
group:IGroup |undefined;


    constructor(private _users:UsersService,
      private _helper:HelperService,
      public dialog: MatDialog,
      private _toastr:ToastrService){
  
    }
    ngOnInit(): void {
      this.getTableData()
     
    }
  
  getTableData(){
    let params={
      pageSize:this.pageSize,
      pageNumber:this.pageNumber,
      userName:this.searchValue,
    
    }
    console.log(params);
    
    this._users.getUsers(params).subscribe({
      next:(res:ITableUsers)=>{
        console.log(res);
        this.tableResponse=res;
      this.tableData=this.tableResponse?.data
      console.log(this.tableData.length);
      
        
      }
    })
  }

  
  
  openDelDialog(data:any): void {
    console.log(data);
    
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: data,
      width:'30%'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result){
         this.delCategory(result.id)
      }
      
    });
  }
  delCategory(data:number){
    this._users.deleteUser(data).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
        
    this._toastr.error(err.error.message)
      },
      complete:()=>{
       
          this._toastr.success('User deleted Successfuly');
          this.getTableData()
      }
    })
    }
  

    handlePageEvent(e:PageEvent){
      console.log(e);
      this.pageSize=e.pageSize;
      this.pageNumber=this.tableResponse?.pageNumber;
      
      this.getTableData()
      }
      
      search(){
        
    
        console.log(this.searchValue);
        this.getTableData()
      }

     
     
}
