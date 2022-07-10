import { IComment } from './../../model/comment';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-comment',
  templateUrl: './base-comment.component.html',
  styleUrls: ['./base-comment.component.css'],
})
export class BaseCommentComponent implements OnInit {
  @Input() comment!: IComment;
  constructor() {}

  ngOnInit(): void {}
}
