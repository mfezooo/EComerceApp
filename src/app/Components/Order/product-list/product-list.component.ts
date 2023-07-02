import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnChanges {
 @Output() totalPriceChanged: EventEmitter<number>;
  orderTotalPrice: number = 0;
  @Input() sentCatID: number = 0;
  prdList: IProduct[];
  prdListFiltered: IProduct[] = [];
  constructor() {
    this.totalPriceChanged = new EventEmitter<number>();
    this.prdList = [
      { id: 100, name: 'LenovoThinkpad', price: 100, quantity: 1, imgURL: 'https://fakeimg.pl/250x100/', categoryID: 1 },
      { id: 200, name: 'Apple', price: 200, quantity: 0, imgURL: 'https://fakeimg.pl/250x100/', categoryID: 1 },
      { id: 300, name: 'LenovoTablet', price: 300, quantity: 10, imgURL: 'https://fakeimg.pl/250x100/', categoryID: 2 },
      { id: 400, name: 'Samsumg', price: 500, quantity: 20, imgURL: 'https://fakeimg.pl/250x100/', categoryID: 3 }
    ];
    this.prdListFiltered = this.prdList;
    orderDate: Date;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.prdListByCatId(this.sentCatID);
  }
  orderDate = new Date();
  changeSelect(catID: any) {
    //this.selectedCat=Number(catID);
  }

  prdListByCatId(sCatID: any) {
    this.prdListFiltered = this.prdList.filter(x => x.categoryID == +sCatID);
  }
  buy(prdPrice: number, count: any) {
    this.orderTotalPrice += prdPrice * +count;
    this.totalPriceChanged.emit(this.orderTotalPrice);
  }
  prdTrack(index: number, prd: IProduct): number {
    return prd.id;

  }
}
