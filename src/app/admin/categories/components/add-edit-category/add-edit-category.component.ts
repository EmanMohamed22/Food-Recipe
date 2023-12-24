
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.scss']
})
export class AddEditCategoryComponent implements OnInit{
  category:string='';

  constructor( public dialogRef: MatDialogRef<AddEditCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){

  }
  ngOnInit(): void {
    console.log(this.data);
    ;
  }
  categoryForm= new FormGroup({
    category:new FormControl(this.data? this.data.name:'',[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
  })
  onClose():void{
    this.dialogRef.close();
  }
}
