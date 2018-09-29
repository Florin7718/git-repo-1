import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PurchasedItemComponent } from './purchased-item/purchased-item.component';
import { FormsModule } from '@angular/forms';
import { PurchasedItemListComponent } from './purchased-item-list/purchased-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PurchasedItemComponent,
    PurchasedItemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
