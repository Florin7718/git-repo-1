import { TestBed } from '@angular/core/testing';

import { AppMessageBusService } from './app-message-bus.service';

describe('AppMessageBusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppMessageBusService = TestBed.get(AppMessageBusService);
    expect(service).toBeTruthy();
  });
});
