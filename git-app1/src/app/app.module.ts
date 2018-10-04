import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { PurchasedItemComponent } from './components/purchased-item/purchased-item.component';
import { PurchasedItemListComponent } from './components/purchased-item-list/purchased-item-list.component';

import { PurchasedItemsServiceService } from './services/purchased-items-service.service';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ViewStatisticsPageComponent } from './pages/view-statistics-page/view-statistics-page.component';
import { AddPurchasePageComponent } from './pages/add-purchase-page/add-purchase-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'view-statistics',
    component: ViewStatisticsPageComponent
  },
  {
    path: 'add-purchase',
    component: AddPurchasePageComponent
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
  path: '**',
  component: PageNotFoundComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PurchasedItemComponent,
    PurchasedItemListComponent,
    LoginPageComponent,
    ViewStatisticsPageComponent,
    AddPurchasePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
          appRoutes,
          { enableTracing: false } // <-- debugging purposes only
        )
  ],
  providers: [
    PurchasedItemsServiceService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
