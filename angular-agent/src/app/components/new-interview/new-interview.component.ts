import { CompanyService } from './../../services/company.service';
import { IInterview, emptyInterview } from './../../model/interview';
import { emptyUser, IUser } from './../../model/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ModalDismissReasons,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-interview',
  templateUrl: './new-interview.component.html',
  styleUrls: ['./new-interview.component.css'],
})
export class NewInterviewComponent implements OnInit {
  @Input() companyId!: number;
  newInterview: IInterview = emptyInterview;
  modalReference!: NgbModalRef;
  today: Date = new Date();
  reservationThreeDays: Date = new Date();
  constructor(
    private modalService: NgbModal,
    private companyService: CompanyService
  ) {}
  closeResult = '';
  newUser: IUser = emptyUser;

  open(content: any) {
    this.modalReference = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
    });
    this.modalReference.result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  register() {
    this.newInterview.interviewedCompanyId = this.companyId;
    this.newInterview.date = new Date();
    this.companyService.createInterview(this.newInterview).subscribe(() => {
      this.modalReference.close();
    });
  }

  ngOnInit(): void {}
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
