import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RingtonesComponent } from './ringtones.component';

describe('RingtonesComponent', () => {
  let component: RingtonesComponent;
  let fixture: ComponentFixture<RingtonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RingtonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RingtonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
