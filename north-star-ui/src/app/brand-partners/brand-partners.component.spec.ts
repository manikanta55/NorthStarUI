import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandPartnersComponent } from './brand-partners.component';

describe('BrandPartnersComponent', () => {
  let component: BrandPartnersComponent;
  let fixture: ComponentFixture<BrandPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
