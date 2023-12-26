import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { RecepieService } from '../services/recepie.service';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { PageEvent } from '@angular/material/paginator';
import { ICategory, IRecipe, ITableRecipe, ITag,  } from '../interfaces/recipe';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.scss']
})
export class RecepiesComponent {
  searchValue:string='';
  pageSize:number=50;
pageNumber:number | undefined=1;
tableResponse:ITableRecipe | undefined;
tableData:IRecipe[] = [];
tagId:number=0
tags:ITag[]=[]
categoryName:string=''
categories:ICategory[]=[];
view:boolean=true;
    constructor(private _recipes:RecepieService,
      private _helper:HelperService,
      public dialog: MatDialog,
      private _toastr:ToastrService){
  
    }
    ngOnInit(): void {
      this.getTableData()
      this.getAllTags()
      this.getAllCategories()
    }
  
  getTableData(){
    let params={
      pageSize:this.pageSize,
      pageNumber:this.pageNumber,
      name:this.searchValue,
      tagId:this.tagId,

categoryId:this.categoryName
    }
    console.log(params);
    
    this._recipes.getRecipes(params).subscribe({
      next:(res:ITableRecipe)=>{
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
    this._recipes.delRecipe(data).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
        
    this._toastr.error(err.error.message)
      },
      complete:()=>{
       
          this._toastr.success('Recipe deleted Successfuly');
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

      getAllTags(){
        this._helper.getTags().subscribe({
          next:(res)=>{
            console.log(res);
            this.tags=res

          }
        })
      }
      getAllCategories(){
        this._helper.getGategories().subscribe({
          next:(res)=>{
            console.log(res);
            this.categories=res.data

          }
        })
      }
}
