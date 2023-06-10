import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
orderTotalPrice:number=0;
selectedCat:number=0;

catList:ICategory[];
prdList:IProduct[];
  constructor(){
    this.catList = [
      {id:1,name:'Laptops'},
      {id:2,name:'Tablets'},
      {id:3,name:'Mobiles'}
    ];

    this.prdList = [
  {id:100,name:'LenovoThinkpad',price:100,quantity:1,imgURL:'https://fakeimg.pl/250x100/',categoryID:1 },
  {id:200,name:'Apple',price:200,quantity:0,imgURL:'https://fakeimg.pl/250x100/',categoryID:1 },
  {id:300,name:'LenovoTablet',price:300,quantity:10,imgURL:'https://fakeimg.pl/250x100/',categoryID:2 },
  {id:400,name:'Samsumg',price:500,quantity:20,imgURL:'https://fakeimg.pl/250x100/',categoryID:3 }
]
  }
  changeSelect(catID:any){
    this.selectedCat=Number(catID);
  }
  buy(prdPrice: number,count: any) { 
   this.orderTotalPrice = prdPrice*+count;
    }
    prdTrack(index:number,prd:IProduct):number
    {
      return prd.id;

    }
}
