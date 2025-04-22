import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScolairesComponent } from './scolaires.component';

describe('ScolairesComponent', () => {
  let component: ScolairesComponent;
  let fixture: ComponentFixture<ScolairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScolairesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScolairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
