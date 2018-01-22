import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsbygenreComponent } from './songsbygenre.component';

describe('SongsbygenreComponent', () => {
  let component: SongsbygenreComponent;
  let fixture: ComponentFixture<SongsbygenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsbygenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsbygenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
