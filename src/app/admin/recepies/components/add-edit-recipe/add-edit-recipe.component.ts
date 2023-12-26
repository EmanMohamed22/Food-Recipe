import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HelperService } from 'src/app/shared/services/helper.service';
import { RecepieService } from '../../services/recepie.service';
import { ICategory, IRecipe, ITag } from '../../interfaces/recipe';
import { ActivatedRoute, Router } from '@angular/router';
import {  ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-recipe',
  templateUrl: './add-edit-recipe.component.html',
  styleUrls: ['./add-edit-recipe.component.scss']
})
export class AddEditRecipeComponent implements OnInit{
tags:ITag[]=[];
tagId:number=0
categories:ICategory[]=[];
category:string='';
imgSrc:any;
recipeId:any;
isUpdatepage:boolean=false;
recipeData:any
viewParam:any
  constructor(private _helper:HelperService,private _recipe:RecepieService,
    private _router:Router,
    private _toastr:ToastrService,
    private _activatedRoute:ActivatedRoute){
   this.recipeId=_activatedRoute.snapshot.params['id'];
   this.viewParam=_activatedRoute.snapshot.params['params'];
    if (this.recipeId) {
      if (this.viewParam) {
        console.log('hi');
        this.viewRecpieById(this.recipeId)
      } else {
      this.isUpdatepage = true;
      this.getRecpieById(this.recipeId)}
    } else {
      this.isUpdatepage = false;
    }
    
   
  }
ngOnInit(): void {
  this.getAllTags();
  this.getAllCategories()
}

getRecpieById(id:number){
this._helper.getRecipesById(id).subscribe({
  next:(res)=>{
    console.log(res);
    this.recipeData=res
  },error:(err)=>{
    this._toastr.error('error')
},complete:()=> {
  this.imgSrc='https:upskilling-egypt.com/'+ this.recipeData.imagePath
  this.dataForm.patchValue({
  name:this.recipeData.name,
  price:this.recipeData.price,
  description:this.recipeData.description,
  tagId:this.recipeData.tag.id,
  categoriesIds:this.recipeData.category[0].id,
  recipeImage:this.recipeData.imagePath
  })
},
})
}

viewRecpieById(id:number){
this._helper.getRecipesById(id).subscribe({
  next:(res)=>{
    console.log(res);
    this.recipeData=res
  },error:(err)=>{
    this._toastr.error('error')
},complete:()=> {
  this.imgSrc='https:upskilling-egypt.com/'+ this.recipeData.imagePath
  this.dataForm.patchValue({
  name:this.recipeData.name,
  price:this.recipeData.price,
  description:this.recipeData.description,
  tagId:this.recipeData.tag.id,
  categoriesIds:this.recipeData.category[0].id,
  recipeImage:this.recipeData.imagePath
  })
  this.disableForm()
},
})
}
disableForm(): void {
  this.dataForm.controls['name'].disable();
  this.dataForm.controls['description'].disable();
  this.dataForm.controls['price'].disable();
  this.dataForm.controls['tagId'].disable();
  this.dataForm.controls['categoriesIds'].disable();
  this.dataForm.controls['recipeImage'].disable();
  
}
dataForm=new FormGroup({
  name:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z]{2,20}$/)]),
  description:new FormControl(null,[Validators.required,Validators.maxLength(50)]),
  price:new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]{1,5}$/)]),
  tagId:new FormControl(null,[Validators.required]),
  categoriesIds:new FormControl(null),
  recipeImage:new FormControl(null,[Validators.required])

})


onSubmit(data:FormGroup){
console.log(data.value);
let myData = new FormData();
myData.append('name',data.value.name);
myData.append('description',data.value.description);
myData.append('price',data.value.price);
myData.append('tagId',data.value.tagId);
myData.append('categoriesIds',data.value.categoriesIds);
myData.append('recipeImage',this.imgSrc,this.imgSrc.name);
if(this.recipeId){

  // Edit
 
    this._recipe.updateRecipe(this.recipeId,myData).subscribe({
      next:(res)=>{
        this._toastr.success(res.message, 'Recipe Updated ');
        this._router.navigate(['/dashboard/dashboard/admin/recepies'])
      }, error:(err) => {
      this._toastr.error(err.message, 'Error!');
    }})
  

 
}else{


this._recipe.addRecipe(myData).subscribe({
next:(res)=>{
  console.log(res);
  this._toastr.success('Recipe Added Successfuly')
this._router.navigate(['/dashboard/dashboard/admin/recepies'])
  
},
error:(err)=>{
  this._toastr.error('error')
},
complete:()=>{
  
  
}
})
}}

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

files: File[] = [];

onSelect(event:any) {
  console.log(event);
  this.imgSrc=event.addedFiles[0]
  this.files.push(...event.addedFiles);
  this.dataForm.get('recipeImage')?.setValue(this.imgSrc)
}

onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}
}
