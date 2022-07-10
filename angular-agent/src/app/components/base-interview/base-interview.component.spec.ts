import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInterviewComponent } from './base-interview.component';

describe('BaseInterviewComponent', () => {
  let component: BaseInterviewComponent;
  let fixture: ComponentFixture<BaseInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
