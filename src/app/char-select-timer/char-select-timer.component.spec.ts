import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharSelectTimerComponent } from './char-select-timer.component';

describe('CharSelectTimerComponent', () => {
  let component: CharSelectTimerComponent;
  let fixture: ComponentFixture<CharSelectTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharSelectTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharSelectTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
