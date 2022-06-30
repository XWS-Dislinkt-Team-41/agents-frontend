import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerJobOfferComponent } from './owner-job-offer.component';

describe('OwnerJobOfferComponent', () => {
  let component: OwnerJobOfferComponent;
  let fixture: ComponentFixture<OwnerJobOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerJobOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerJobOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
