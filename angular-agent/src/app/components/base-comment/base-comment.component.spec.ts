import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCommentComponent } from './base-comment.component';

describe('BaseCommentComponent', () => {
  let component: BaseCommentComponent;
  let fixture: ComponentFixture<BaseCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
