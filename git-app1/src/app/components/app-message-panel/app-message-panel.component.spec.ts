import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMessagePanelComponent } from './app-message-panel.component';

describe('AppMessagePanelComponent', () => {
  let component: AppMessagePanelComponent;
  let fixture: ComponentFixture<AppMessagePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMessagePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMessagePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
