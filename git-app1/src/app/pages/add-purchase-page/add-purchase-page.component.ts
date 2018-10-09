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

  private isSuccess: boolean = false;
  private isPurchaseComplete: boolean = false;
  private successMessage: string = "Purchase added.";
  private errorMessage: string = "Error adding purchase.";

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
        () => {
          console.log("success purchase");
          this.isPurchaseComplete = true;
          this.isSuccess = true;
        },
        () => {
          console.log("error purchase");
          this.isPurchaseComplete = true;
          this.isSuccess = false;
        },
        () => { console.log("complete purchase"); }
      );

  }

  addNewPurchase(): void {
    this.isPurchaseComplete = false;
  }

}
