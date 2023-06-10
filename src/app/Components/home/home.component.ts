import { Component } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
storeInfo:StoreData;
isImageShow:boolean=true;
constructor() {
  this.storeInfo = new StoreData("ITI","https://picsum.photos/400/200",["Cairo","alex","Qena","Sharm"])
}
imageToggle(){
  this.isImageShow = !this.isImageShow;
}
}
