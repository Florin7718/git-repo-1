import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedItemListComponent } from './purchased-item-list.component';

describe('PurchasedItemListComponent', () => {
  let component: PurchasedItemListComponent;
  let fixture: ComponentFixture<PurchasedItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasedItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
