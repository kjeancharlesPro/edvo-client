import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeceneComponent } from './mecene.component';

describe('MeceneComponent', () => {
  let component: MeceneComponent;
  let fixture: ComponentFixture<MeceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeceneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
