import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerJobOffersComponent } from './owner-job-offers.component';

describe('OwnerJobOffersComponent', () => {
  let component: OwnerJobOffersComponent;
  let fixture: ComponentFixture<OwnerJobOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerJobOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerJobOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
