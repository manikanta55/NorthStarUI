import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GabbarSinghInfoComponent } from './gabbar-singh-info.component';

describe('GabbarSinghInfoComponent', () => {
  let component: GabbarSinghInfoComponent;
  let fixture: ComponentFixture<GabbarSinghInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GabbarSinghInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GabbarSinghInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
