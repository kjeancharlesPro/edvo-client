import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurActionsComponent } from './our-actions.component';

describe('OurActionsComponent', () => {
  let component: OurActionsComponent;
  let fixture: ComponentFixture<OurActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
