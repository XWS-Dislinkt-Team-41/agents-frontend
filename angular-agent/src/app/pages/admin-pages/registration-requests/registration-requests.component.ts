import { Component, OnInit } from '@angular/core';
import { ICompanyRegistrationRequest } from 'src/app/model/companyRegistrationRequest';
import { RequestStatus } from 'src/app/model/requestStatus';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-registration-requests',
  templateUrl: './registration-requests.component.html',
  styleUrls: ['./registration-requests.component.css'],
})
export class RegistrationRequestsComponent implements OnInit {
  RequestStatus = RequestStatus;
  requests!: ICompanyRegistrationRequest[];

  constructor(private requestsService: RequestsService) {
    this.requestsService.submitedRegistrationRequest$.subscribe(() => {
      this.getRequests();
    });
  }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this.requestsService
      .getCompanyRegistrationRequests()
      .subscribe((registrationRequests) => {
        this.requests = registrationRequests;
      });
  }

  getStatus(request: ICompanyRegistrationRequest): string {
    if (request.status == RequestStatus.Waiting) return 'Waitting';
    else if (request.status == RequestStatus.Accepted) return 'Accepted';
    return 'Declined';
  }

  answer(requset: ICompanyRegistrationRequest) {
    this.requestsService.openDialogRegistration(requset);
  }
}
