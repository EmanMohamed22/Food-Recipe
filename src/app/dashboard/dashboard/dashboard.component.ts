import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
   isOpened:any;

toggle(data:any){

console.log(data);
this.isOpened=data

}
}
// <!-- [class]="isOpened?'col-md-2':'col-md-1'" (toggle)="toggle($event)"   [class]="isOpened?'col-md-10':'col-md-11'"-->