import { CompanyService } from './../../services/company.service';
import { IComment, emptyComment } from './../../model/comment';
import { UserService } from './../../services/user.service';
import { emptyUser, IUser } from './../../model/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  ModalDismissReasons,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css'],
})
export class NewCommentComponent implements OnInit {
  @Input() companyId!: number;
  userId: number = 0;
  newComment: IComment = emptyComment;
  modalReference!: NgbModalRef;
  today: Date = new Date();
  reservationThreeDays: Date = new Date();
  constructor(
    private modalService: NgbModal,
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
    this.newComment.reviewedJobId = this.companyId;
    this.newComment.userId = this.userId;
    this.newComment.date = new Date();
    this.companyService.createComment(this.newComment).subscribe(() => {
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
