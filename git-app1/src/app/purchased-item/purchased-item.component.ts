import{Component, OnInit}from '@angular/core';

@Component({
  selector: 'app-purchased-item',
  templateUrl: './purchased-item.component.html',
  styleUrls: ['./purchased-item.component.css']
})
export class PurchasedItemComponent implements OnInit {

  private name : string = 'Beer';
  private price : string = '3.5';
  private currency : string = 'RON';
  private date : string = '28.09.2018';

  constructor() {}

  //  // Note 1
  //  // invalid because "string" is not a provider
  //  constructor(item: string, name: string, price: string) {
  //    this.item = item;
  //    this.name = name;
  //    this.price = price;
  //  }

  ngOnInit() {
  }

}
