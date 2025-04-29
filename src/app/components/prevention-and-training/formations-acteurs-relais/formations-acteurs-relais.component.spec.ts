import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsActeursRelaisComponent } from './formations-acteurs-relais.component';

describe('FormationsActeursRelaisComponent', () => {
  let component: FormationsActeursRelaisComponent;
  let fixture: ComponentFixture<FormationsActeursRelaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationsActeursRelaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationsActeursRelaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
