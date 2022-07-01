import { IJobOffer, emptyJobOffer } from 'src/app/model/jobOffer';
import { Component, OnInit } from '@angular/core';
import { JobOfferService } from 'src/app/services/job-offer.service';

@Component({
  selector: 'app-owner-job-offers',
  templateUrl: './owner-job-offers.component.html',
  styleUrls: ['./owner-job-offers.component.css'],
})
export class OwnerJobOffersComponent implements OnInit {
  jobOffers: IJobOffer[] = [
    emptyJobOffer,
    emptyJobOffer
  ];

  constructor(private jobOfferService: JobOfferService) {}

  ngOnInit(): void {
    this.jobOfferService
      .getCompanyJobOffers(1)
      .subscribe((jobOffers) => (this.jobOffers = jobOffers));
  }
}
