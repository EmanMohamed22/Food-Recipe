import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { ITableRecipe, ITag, ICategory, IRecipe } from 'src/app/admin/recepies/interfaces/recipe';
import { RecepieService } from 'src/app/admin/recepies/services/recepie.service';

import { HelperService } from 'src/app/shared/services/helper.service';
import { ViewComponent } from '../components/view/view.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-u-recepies',
  templateUrl: './u-recepies.component.html',
  styleUrls: ['./u-recepies.component.scss']
})
export class URecepiesComponent {
  searchValue:string='';
  pageSize:number=50;
pageNumber:number | undefined=1;
tableResponse:ITableRecipe | undefined;
tableData:any;
tagId:number=0
tags:ITag[]=[]
categoryName:string=''
categories:ICategory[]=[];
hover:boolean=false;
    constructor(private _recipes:RecepieService,
      private _helper:HelperService,
      public dialog: MatDialog,
      private _toastr:ToastrService,
      private _user:UserService){
  
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
      console.log(this.tableData);
      
        
      }
    })
  }

  
  
  openViewDialog(data:IRecipe): void {
    console.log(data);
    
    const dialogRef = this.dialog.open(ViewComponent, {
      data: data,
      width:'30%'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result){
    this.onAddToFav(result)
      }
      
    });
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

      onAddToFav(data:number){
        console.log(data);
        
        this._user.onAddToFavs(data).subscribe({
          next:(res)=> {
            console.log(res);
            this._toastr.success('Recipe has been added')
            
          },
        })
      }
}
