import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenevolComponent } from './benevol.component';

describe('BenevolComponent', () => {
  let component: BenevolComponent;
  let fixture: ComponentFixture<BenevolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenevolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenevolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
