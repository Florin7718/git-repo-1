import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MustNotBeLoggedInPageComponent } from './must-not-be-logged-in-page.component';

describe('MustNotBeLoggedInPageComponent', () => {
  let component: MustNotBeLoggedInPageComponent;
  let fixture: ComponentFixture<MustNotBeLoggedInPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MustNotBeLoggedInPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MustNotBeLoggedInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
