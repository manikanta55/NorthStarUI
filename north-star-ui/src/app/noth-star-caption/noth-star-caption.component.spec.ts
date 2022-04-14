import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NothStarCaptionComponent } from './noth-star-caption.component';

describe('NothStarCaptionComponent', () => {
  let component: NothStarCaptionComponent;
  let fixture: ComponentFixture<NothStarCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NothStarCaptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NothStarCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
