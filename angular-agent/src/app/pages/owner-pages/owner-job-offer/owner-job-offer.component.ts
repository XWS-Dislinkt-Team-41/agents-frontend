import { ActivatedRoute, Router } from '@angular/router';
import { JobOfferService } from './../../../services/job-offer.service';
import { Component, OnInit } from '@angular/core';
import { IJobOffer, emptyJobOffer } from 'src/app/model/jobOffer';

@Component({
  selector: 'app-owner-job-offer',
  templateUrl: './owner-job-offer.component.html',
  styleUrls: ['./owner-job-offer.component.css'],
})
export class OwnerJobOfferComponent implements OnInit {
  jobOffer: IJobOffer = emptyJobOffer;

  constructor(
    private jobOfferService: JobOfferService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id')!;
    this.getJobOffer(id);
  }

  private getJobOffer(id: number) {
    this.jobOfferService
      .getJobOfferById(id)
      .subscribe((jobOffer) => (this.jobOffer = jobOffer));
  }

  publishJobOffer(): void {
    this.jobOfferService
      .publishJobOffer(this.jobOffer)
      .subscribe((jobOffer) => (this.jobOffer = jobOffer));
  }

  deleteJobOffer(): void {
    this.jobOfferService
      .deleteJobOffer(this.jobOffer.id)
      .subscribe(() => this.router.navigate(['/jobOffers']));
  }

  editJobOffer(): void {
  }
}
