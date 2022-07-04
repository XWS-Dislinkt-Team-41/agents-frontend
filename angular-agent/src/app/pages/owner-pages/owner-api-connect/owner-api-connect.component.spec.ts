import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerApiConnectComponent } from './owner-api-connect.component';

describe('OwnerApiConnectComponent', () => {
  let component: OwnerApiConnectComponent;
  let fixture: ComponentFixture<OwnerApiConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerApiConnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerApiConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
