import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cm2Component } from './cm2.component';

describe('Cm2Component', () => {
  let component: Cm2Component;
  let fixture: ComponentFixture<Cm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cm2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
