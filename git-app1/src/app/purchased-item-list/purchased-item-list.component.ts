import { Component, OnInit } from '@angular/core';
import { PurchasedItemComponent } from './../purchased-item/purchased-item.component';

@Component({
  selector: 'app-purchased-item-list',
  templateUrl: './purchased-item-list.component.html',
  styleUrls: ['./purchased-item-list.component.css']
})
export class PurchasedItemListComponent implements OnInit {

  onePurchasedItem : PurchasedItemComponent;
  purchasedItems : PurchasedItemComponent[] = [];

  constructor() { }

  ngOnInit() {
  }

  getItemsFromDB(){
    var item : PurchasedItemComponent = new PurchasedItemComponent();
    item.name = 'hardcoded item';
    item.price = 'hardcoded price';
    item.currency = 'hardcoded currency';
    item.date = 'hardcoded date';
    this.purchasedItems.push(item);
  }

  clearItems(){
      this.purchasedItems = [];
    }

}
