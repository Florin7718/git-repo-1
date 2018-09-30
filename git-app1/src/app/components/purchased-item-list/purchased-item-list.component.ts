import { Component, OnInit } from '@angular/core';
import { PurchasedItemComponent } from './../purchased-item/purchased-item.component';
import { PurchasedItemsServiceService } from './../../services/purchased-items-service.service';

@Component({
  selector: 'app-purchased-item-list',
  templateUrl: './purchased-item-list.component.html',
  styleUrls: ['./purchased-item-list.component.css']
})
export class PurchasedItemListComponent implements OnInit {

  onePurchasedItem : PurchasedItemComponent;
  purchasedItems : PurchasedItemComponent[] = [];

  constructor(private itemService : PurchasedItemsServiceService) { }

  ngOnInit() {
  }

  getItemsFromDB(){
    this.purchasedItems = this.itemService.getItemsFromDB();
  }

  clearItems(){
      this.purchasedItems = [];
    }

}
