import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule, MatTableModule } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { PurchasedItemComponent } from './components/purchased-item/purchased-item.component';
import { PurchasedItemListComponent } from './components/purchased-item-list/purchased-item-list.component';

import { PurchasedItemsServiceService } from './services/purchased-items-service.service';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ViewStatisticsPageComponent } from './pages/view-statistics-page/view-statistics-page.component';
import { AddPurchasePageComponent } from './pages/add-purchase-page/add-purchase-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PurchasedItemTableComponent } from './components/purchased-item-table/purchased-item-table.component';
import { PricingCardComponent } from './components/pricing-card/pricing-card.component';
import { UserComponent } from './components/user/user.component';
import { LoggedInMenuGuardGuard } from './services/guards/logged-in-menu-guard.guard';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { NotLoggedInMenuGuard } from './services/guards/not-logged-in-menu.guard';
import { MustBeLoggedInPageComponent } from './pages/must-be-logged-in-page/must-be-logged-in-page.component';
import { MustNotBeLoggedInPageComponent } from './pages/must-not-be-logged-in-page/must-not-be-logged-in-page.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { AppMessagePanelComponent } from './components/app-message-panel/app-message-panel.component';
import { AppMessageBusService } from './services/app-message-bus.service';
import { RuleCreationComponent } from './pages/rule-creation/rule-creation.component';
import { CategCreationComponent } from './pages/categ-creation/categ-creation.component';
import { CategRuleAssigManagementComponent } from './pages/categ-rule-assig-management/categ-rule-assig-management.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [NotLoggedInMenuGuard]
  },
  {
    path: 'view-statistics',
    component: ViewStatisticsPageComponent,
    canActivate: [LoggedInMenuGuardGuard]
  },
  {
    path: 'add-purchase',
    component: AddPurchasePageComponent,
    canActivate: [LoggedInMenuGuardGuard]
  },
  {
    path: 'logout',
    component: LogoutPageComponent,
    canActivate: [LoggedInMenuGuardGuard]
  },
  {
    path: 'must-be-logged-in',
    component: MustBeLoggedInPageComponent,
    canActivate: [NotLoggedInMenuGuard]
  },
  {
    path: 'must-not-be-logged-in',
    component: MustNotBeLoggedInPageComponent,
    canActivate: [LoggedInMenuGuardGuard]
  },
  {
    component: RuleCreationComponent,
    path: 'r'
  },
  {
    component: CategCreationComponent,
    path: 'c'
  },
  {
    component: CategRuleAssigManagementComponent,
    path: 'cram'
  },
  {
    path: '',
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
    // 
    PurchasedItemComponent,
    PurchasedItemListComponent,
    LoginPageComponent,
    ViewStatisticsPageComponent,
    AddPurchasePageComponent,
    PageNotFoundComponent,
    PurchasedItemTableComponent,
    PricingCardComponent,
    UserComponent,
    LogoutPageComponent,
    MustBeLoggedInPageComponent,
    MustNotBeLoggedInPageComponent,
    LineChartComponent,
    AppMessagePanelComponent,
    RuleCreationComponent,
    CategCreationComponent,
    CategRuleAssigManagementComponent
  ],
  imports: [
    ChartsModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    NgbModule
  ],
  providers: [
    PurchasedItemsServiceService,
    AppMessageBusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
