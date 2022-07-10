import { IInterview } from './../../model/interview';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-interview',
  templateUrl: './base-interview.component.html',
  styleUrls: ['./base-interview.component.css'],
})
export class BaseInterviewComponent implements OnInit {
  @Input() interview!: IInterview;
  constructor() {}

  ngOnInit(): void {}
}
