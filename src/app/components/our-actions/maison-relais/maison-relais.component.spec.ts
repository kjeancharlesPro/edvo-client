import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonRelaisComponent } from './maison-relais.component';

describe('MaisonRelaisComponent', () => {
  let component: MaisonRelaisComponent;
  let fixture: ComponentFixture<MaisonRelaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaisonRelaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaisonRelaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
