import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategCreationComponent } from './categ-creation.component';

describe('CategCreationComponent', () => {
  let component: CategCreationComponent;
  let fixture: ComponentFixture<CategCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
