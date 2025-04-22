import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenariaComponent } from './partenaria.component';

describe('PartenariaComponent', () => {
  let component: PartenariaComponent;
  let fixture: ComponentFixture<PartenariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartenariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartenariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
