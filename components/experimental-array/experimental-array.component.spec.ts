import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentalArrayComponent } from './experimental-array.component';

describe('ExperimentalArrayComponent', () => {
  let component: ExperimentalArrayComponent;
  let fixture: ComponentFixture<ExperimentalArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentalArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentalArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
