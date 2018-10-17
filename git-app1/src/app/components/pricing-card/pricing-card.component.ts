import { Component, OnInit } from '@angular/core';
import { PurchasedItemComponent } from './../purchased-item/purchased-item.component';
import { PurchasedItemsServiceService } from './../../services/purchased-items-service.service';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.css']
})
export class PricingCardComponent implements OnInit {

  purchasedItems : PurchasedItemComponent[] = [];

  constructor(private itemService : PurchasedItemsServiceService) { }

  ngOnInit() {
    this.getItemsFromDB();
  }

  getItemsFromDB(){
    this.itemService.getItemsFromDB().subscribe(
      (res) => {
        this.purchasedItems = res;
        console.log("success view-purchases");
      },
      err => {
        console.log(err);
        console.log("error view-purchases");
      },
      () => {
        console.log("complete view-purchases");
      }
    );
  }

}
