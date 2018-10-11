import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PurchasedItemsServiceService } from '../../services/purchased-items-service.service';
import { PurchasedItemComponent } from '../purchased-item/purchased-item.component';

@Component({
  selector: 'app-purchased-item-table',
  templateUrl: './purchased-item-table.component.html',
  styleUrls: ['./purchased-item-table.component.css']
})
export class PurchasedItemTableComponent implements OnInit {

  private displayedColumns: string[] = ['name', 'price', 'currency', 'date'];

  private datasource: PurchasedItemComponent[] = [];

  constructor(private itemService: PurchasedItemsServiceService, private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.itemService.getItemsFromDB()
      .subscribe((suc) => {
        console.log(suc);
        this.datasource = suc;
        //not needed but good to know about
        this.changeDetectorRefs.detectChanges();
      },
        (err) => {
          console.log(err);
          this.datasource = [];
        });
  }

  getTotalPrice() {
    return this.datasource.map(item => item.price).reduce(((s1, s2) => Number(s1) + Number(s2)), 0);
  }
}