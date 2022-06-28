import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { ICompanyRegistrationRequest } from 'src/app/model/companyRegistrationRequest';
import { RequestStatus } from 'src/app/model/requestStatus';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-answer-registration-request',
  templateUrl: './answer-registration-request.component.html',
  styleUrls: ['./answer-registration-request.component.css'],
})
export class AnswerRegistrationRequestComponent implements OnInit {
  @ViewChild('reg') addModal!: ModalDirective;
  request: ICompanyRegistrationRequest = {
    id: 0,
    status: RequestStatus.Waiting,
    userId: 0,
  };

  constructor(private requestsService: RequestsService) {
    requestsService.openDialogRegistration$.subscribe((request) => {
      if (request != undefined) {
        this.request = request;
        this.show();
      }
    });
  }

  ngOnInit() {}

  show() {
    this.addModal.show();
  }

  close() {
    this.addModal.hide();
  }

  accept() {
    this.requestsService
      .acceptRegistrationRequest(this.request)
      .subscribe(() => {
        this.requestsService.submitedRegistrationRequest();
        this.close();
      });
  }

  decline() {
    this.requestsService
      .declineRegistrationRequest(this.request)
      .subscribe(() => {
        this.requestsService.submitedRegistrationRequest();
        this.close();
      });
  }
}
