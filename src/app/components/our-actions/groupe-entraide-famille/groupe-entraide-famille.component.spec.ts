import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeEntraideFamilleComponent } from './groupe-entraide-famille.component';

describe('GroupeEntraideFamilleComponent', () => {
  let component: GroupeEntraideFamilleComponent;
  let fixture: ComponentFixture<GroupeEntraideFamilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupeEntraideFamilleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupeEntraideFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
