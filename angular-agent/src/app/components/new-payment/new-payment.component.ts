import { AuthenticationService } from './../../services/authentication.service';
import { CompanyService } from './../../services/company.service';
import { emptyPayment, IPayment } from './../../model/payment';
import { UserService } from './../../services/user.service';
import { emptyUser, IUser } from './../../model/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  ModalDismissReasons,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.css'],
})
export class NewPaymentComponent implements OnInit {
  @Input() companyId!: number;
  userId: number = 0;
  newPayment: IPayment = emptyPayment;
  modalReference!: NgbModalRef;
  today: Date = new Date();
  reservationThreeDays: Date = new Date();
  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    private companyService: CompanyService,
    private authService: AuthenticationService
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
    this.newPayment.companyId = this.companyId;
    this.newPayment.jobPositionPayment.companyId = this.companyId;
    this.newPayment.jobPositionPayment.nameOfPosition =
      this.newPayment.jobPosition;
    this.newPayment.jobPositionPayment.price = this.newPayment.price;
    this.newPayment.userId = this.userId;
    this.companyService.createPayment(this.newPayment).subscribe(() => {
      this.modalReference.close();
    });
  }

  ngOnInit(): void {
    this.authService.userSubject.subscribe((user) => {
      this.userId = user.id;
    });
  }

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
