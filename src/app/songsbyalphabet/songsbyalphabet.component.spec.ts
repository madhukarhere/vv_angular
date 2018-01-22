import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsbyalphabetComponent } from './songsbyalphabet.component';

describe('SongsbyalphabetComponent', () => {
  let component: SongsbyalphabetComponent;
  let fixture: ComponentFixture<SongsbyalphabetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsbyalphabetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsbyalphabetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
