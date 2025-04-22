import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionAndTrainingComponent } from './prevention-and-training.component';

describe('PreventionAndTrainingComponent', () => {
  let component: PreventionAndTrainingComponent;
  let fixture: ComponentFixture<PreventionAndTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreventionAndTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreventionAndTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
