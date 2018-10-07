import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedItemTableComponent } from './purchased-item-table.component';

describe('PurchasedItemTableComponent', () => {
  let component: PurchasedItemTableComponent;
  let fixture: ComponentFixture<PurchasedItemTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasedItemTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedItemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
