import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStatisticsPageComponent } from './view-statistics-page.component';

describe('ViewStatisticsPageComponent', () => {
  let component: ViewStatisticsPageComponent;
  let fixture: ComponentFixture<ViewStatisticsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStatisticsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStatisticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
