import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategRuleAssigManagementComponent } from './categ-rule-assig-management.component';

describe('CategRuleAssigManagementComponent', () => {
  let component: CategRuleAssigManagementComponent;
  let fixture: ComponentFixture<CategRuleAssigManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategRuleAssigManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategRuleAssigManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
