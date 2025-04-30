import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberAddictionsComponent } from './cyber-addictions.component';

describe('CyberAddictionsComponent', () => {
  let component: CyberAddictionsComponent;
  let fixture: ComponentFixture<CyberAddictionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyberAddictionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyberAddictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
