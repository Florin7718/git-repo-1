import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MustBeLoggedInPageComponent } from './must-be-logged-in-page.component';

describe('MustBeLoggedInPageComponent', () => {
  let component: MustBeLoggedInPageComponent;
  let fixture: ComponentFixture<MustBeLoggedInPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MustBeLoggedInPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MustBeLoggedInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
