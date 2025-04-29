import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartementsTherapeutiquesComponent } from './appartements-therapeutiques.component';

describe('AppartementsTherapeutiquesComponent', () => {
  let component: AppartementsTherapeutiquesComponent;
  let fixture: ComponentFixture<AppartementsTherapeutiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppartementsTherapeutiquesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppartementsTherapeutiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
