import { IJobOffer, emptyJobOffer } from './../../../model/jobOffer';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.css'],
})
export class JobOfferComponent implements OnInit {
  @Input('jobOffer') jobOffer: IJobOffer = emptyJobOffer;

  constructor() {}

  ngOnInit(): void {}
}
