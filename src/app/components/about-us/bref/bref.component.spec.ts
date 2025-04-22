import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrefComponent } from './bref.component';

describe('BrefComponent', () => {
  let component: BrefComponent;
  let fixture: ComponentFixture<BrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
