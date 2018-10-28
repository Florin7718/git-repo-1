import { Component, OnInit, Input } from '@angular/core';
import { PurchasedItemsServiceService } from '../../services/purchased-items-service.service';
import { PurchasedItemComponent } from '../../components/purchased-item/purchased-item.component';

@Component({
  selector: 'app-add-purchase-page',
  templateUrl: './add-purchase-page.component.html',
  styleUrls: ['./add-purchase-page.component.css']
})
export class AddPurchasePageComponent implements OnInit {
  @Input() importFromTextArea: string = "";

  private textAreaSampleInput = "2-Oct\tbere\t35\n3-Oct\tauchan\t6.25\n3-Oct\tniste fornetti\t4";

  private isSuccess: boolean = false;
  private isPurchaseComplete: boolean = false;
  private successMessage: string = "Purchase added.";
  private errorMessage: string = "Error adding purchase.";

  private emptyPurchase: PurchasedItemComponent = {
    name: '',
    price: 0,
    currency: '',
    date: ''
  };

  private purchaseToBeCloned: PurchasedItemComponent = this.emptyPurchase;

  constructor(private itemsService: PurchasedItemsServiceService) { }

  ngOnInit() {
    this.purchaseToBeCloned = this.itemsService.getPurchaseToBeCloned();
  }

  addPurchase() {

    var comp: PurchasedItemComponent = new PurchasedItemComponent();

    comp.name = this.purchaseToBeCloned.name;
    comp.price = this.purchaseToBeCloned.price;
    comp.currency = this.purchaseToBeCloned.currency;
    comp.date = this.purchaseToBeCloned.date;

    this.itemsService.addPurchase(comp)
      .subscribe(
        () => {
          console.log("success purchase");
          this.isPurchaseComplete = true;
          this.isSuccess = true;
          this.purchaseToBeCloned = this.emptyPurchase;
          this.itemsService.setPurchaseToBeCloned(this.emptyPurchase);
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

  doImportFromTextArea(): void {
    this.importFromTextArea.split("\n").forEach(line => {
      var itemParts = line.split("\t");

      //when / what / how much
      this.purchaseToBeCloned.name = itemParts[1];
      this.purchaseToBeCloned.price = Number(itemParts[2]);
      this.purchaseToBeCloned.currency = 'RON - default';
      this.purchaseToBeCloned.date = itemParts[0];

      this.addPurchase();
    });
  }

}
