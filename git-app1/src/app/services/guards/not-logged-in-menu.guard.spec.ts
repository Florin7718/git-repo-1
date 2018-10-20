import { TestBed, async, inject } from '@angular/core/testing';

import { NotLoggedInMenuGuard } from './not-logged-in-menu.guard';

describe('NotLoggedInMenuGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotLoggedInMenuGuard]
    });
  });

  it('should ...', inject([NotLoggedInMenuGuard], (guard: NotLoggedInMenuGuard) => {
    expect(guard).toBeTruthy();
  }));
});
