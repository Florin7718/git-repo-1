import { Component, OnInit, Input } from '@angular/core';
import { PurchasedItemsServiceService } from '../../services/purchased-items-service.service';
import { PurchasedItemComponent } from '../../components/purchased-item/purchased-item.component';

@Component({
  selector: 'app-add-purchase-page',
  templateUrl: './add-purchase-page.component.html',
  styleUrls: ['./add-purchase-page.component.css']
})
export class AddPurchasePageComponent implements OnInit {

  @Input() name: string;
  @Input() price: string;
  @Input() currency: string;
  @Input() date: string;

  constructor(private itemsService: PurchasedItemsServiceService) { }

  ngOnInit() {
  }

  addPurchase() {

    var comp: PurchasedItemComponent = new PurchasedItemComponent();

    comp.name = this.name;
    comp.price = this.price;
    comp.currency = this.currency;
    comp.date = this.date;

    this.itemsService.addPurchase(comp)
      .subscribe(
        () => { console.log("success purchase"); },
        () => { console.log("error purchase"); },
        () => { console.log("complete purchase"); }
      );

  }

}
