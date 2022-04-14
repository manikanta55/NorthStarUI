import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNorthStarComponent } from './about-north-star.component';

describe('AboutNorthStarComponent', () => {
  let component: AboutNorthStarComponent;
  let fixture: ComponentFixture<AboutNorthStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutNorthStarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutNorthStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
