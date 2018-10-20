import { TestBed, async, inject } from '@angular/core/testing';

import { LoggedInMenuGuardGuard } from './logged-in-menu-guard.guard';

describe('LoggedInMenuGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedInMenuGuardGuard]
    });
  });

  it('should ...', inject([LoggedInMenuGuardGuard], (guard: LoggedInMenuGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
