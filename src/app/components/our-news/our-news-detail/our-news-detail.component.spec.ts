import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurNewsDetailComponent } from './our-news-detail.component';

describe('OurNewsDetailComponent', () => {
  let component: OurNewsDetailComponent;
  let fixture: ComponentFixture<OurNewsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurNewsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurNewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
