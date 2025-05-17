import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalCarouselComponent } from './hospital-carousel.component';

describe('HospitalCarouselComponent', () => {
  let component: HospitalCarouselComponent;
  let fixture: ComponentFixture<HospitalCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
