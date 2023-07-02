import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent {
catList : ICategory[];
selectedCat:number=0; 
recivedTotalOrderPrice:number=0;
/**
 *
 */
constructor() {
 this.catList = [
  {id:1,name:'Laptops'},
  {id:2,name:'Tablets'},
  {id:3,name:'Mobiles'}

];
}
onPriceChanged($event:number) 
{
  this.recivedTotalOrderPrice = $event;
}
 
}
