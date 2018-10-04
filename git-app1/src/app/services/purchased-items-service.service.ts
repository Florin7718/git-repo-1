import { Injectable } from '@angular/core';
import { PurchasedItemComponent } from './../components/purchased-item/purchased-item.component';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchasedItemsServiceService {

  constructor(private httpClient: HttpClient) { }

  getItemsFromDB() {

    var purchasedItems: PurchasedItemComponent[] = [];

    // npm start :::: ng serve git-app1 --proxy-config proxy.conf.json
    var obs: Observable<PurchasedItemComponent[]> = this.httpClient.get<PurchasedItemComponent[]>("/api/view-purchases", {});
    return obs;
  }

  addPurchase(p: PurchasedItemComponent): Observable<void> {
    const rq = {
      name: p.name,
      price: p.price,
      currency: p.currency,
      date: p.date
    };

    var obs: Observable<void> = this.httpClient.post<void>("/api/add-purchase", rq);
    return obs;
  }

}
