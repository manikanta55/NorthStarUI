import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakshyaInfoComponent } from './lakshya-info.component';

describe('LakshyaInfoComponent', () => {
  let component: LakshyaInfoComponent;
  let fixture: ComponentFixture<LakshyaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LakshyaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LakshyaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
