import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Icategory, ItableCategory } from '../interfaces/category';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddEditCategoryComponent } from '../components/add-edit-category/add-edit-category.component';
import { ToastrService } from 'ngx-toastr';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { HelperService } from 'src/app/shared/services/helper.service';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{

  searchValue:string='';
pageSize:number=50;
pageNumber:number | undefined=1;
tableResponse:ItableCategory | undefined;
tableData:Icategory[] | undefined=[] ;


  constructor(private _categories:CategoriesService,
    public dialog: MatDialog,
    private _toastr:ToastrService,
    ){

  }
  ngOnInit(): void {
    this.getTableData()
  }

getTableData(){
  let params={
    pageSize:this.pageSize,
    pageNumber:this.pageNumber,
    name:this.searchValue
  }
  this._categories.getGategories(params).subscribe({
    next:(res)=>{
      console.log(res);
      this.tableResponse=res;
      this.tableData=this.tableResponse?.data
      
    }
  })
}

openAddDialog(): void {
  const dialogRef = this.dialog.open(AddEditCategoryComponent, {
    
    width:'30%'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
    if(result){
      this.addCategory(result)
    }
    
  });
}
addCategory(data:string){
  this._categories.addCategory(data).subscribe({
    next:(res)=>{
      console.log(res);
    },
    error:(err)=>{
      console.log(err);
      
  this._toastr.error(err.error.message)
    },
    complete:()=>{
     
        this._toastr.success('Category added Successfuly');
        this.getTableData()
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
       this.delCategory(result)
    }
    
  });
}
delCategory(data:number){
  this._categories.delCategory(data).subscribe({
    next:(res)=>{
      console.log(res);
    },
    error:(err)=>{
      console.log(err);
      
  this._toastr.error(err.error.message)
    },
    complete:()=>{
     
        this._toastr.success('Category deleted Successfuly');
        this.getTableData()
    }
  })
  }
openUpdateDialog(data:any): void {
  console.log(data); 
  const dialogRef = this.dialog.open(AddEditCategoryComponent, {
    data: data,
    
    width:'30%'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
    if(result){
      
       this.updateCategory(data.id,result)
    }
    
  });
}
updateCategory(data:number,data1:string){
  this._categories.updateCategory(data,data1).subscribe({
    next:(res)=>{
      console.log(res);
    },
    error:(err)=>{
      console.log(err);
      
  this._toastr.error(err.error.message)
    },
    complete:()=>{
     
        this._toastr.success('Category update Successfuly');
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
  
  // this.searchValue=this.searchValue
  console.log(this.searchValue);
  this.getTableData()
}
}
