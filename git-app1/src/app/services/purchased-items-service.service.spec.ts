import { TestBed } from '@angular/core/testing';

import { PurchasedItemsServiceService } from './purchased-items-service.service';

describe('PurchasedItemsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PurchasedItemsServiceService = TestBed.get(PurchasedItemsServiceService);
    expect(service).toBeTruthy();
  });
});
