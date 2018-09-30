import { Injectable } from '@angular/core';
import { PurchasedItemComponent } from './../components/purchased-item/purchased-item.component';

@Injectable({
  providedIn: 'root'
})
export class PurchasedItemsServiceService {

  constructor() { }

  getItemsFromDB(){
    var purchasedItems : PurchasedItemComponent[] = [];
    var item : PurchasedItemComponent = new PurchasedItemComponent();
    item.name = 'hardcoded item';
    item.price = 'hardcoded price';
    item.currency = 'hardcoded currency';
    item.date = 'hardcoded date';
    purchasedItems.push(item);
    purchasedItems.push(item);
    purchasedItems.push(item);
    return purchasedItems;
  }

}
