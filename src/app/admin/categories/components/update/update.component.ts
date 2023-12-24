import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  category:string='';
  constructor( public dialogRef: MatDialogRef<UpdateComponent>,
    ){

  }
  onClose():void{
    this.dialogRef.close();
  }
}
