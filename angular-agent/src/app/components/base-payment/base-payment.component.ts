import { IJobPositionPayment } from './../../model/jobPositionPayment';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-payment',
  templateUrl: './base-payment.component.html',
  styleUrls: ['./base-payment.component.css'],
})
export class BasePaymentComponent implements OnInit {
  @Input() payment!: IJobPositionPayment;
  constructor() {}

  ngOnInit(): void {}
}
