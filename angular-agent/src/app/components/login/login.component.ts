import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from './../../services/authentication.service';
import { UserService } from './../../services/user.service';
import { IUserLogin } from './../../model/userLogin';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  ModalDismissReasons,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { IUser } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });

  userLogin: IUserLogin = {
    username: '',
    password: '',
  };
  errorMessage!: string;
  loggedInUser!: IUser;
  modalReference!: NgbModalRef;
  today: Date = new Date();
  reservationThreeDays: Date = new Date();
  constructor(
    private modalService: NgbModal,
    private authenticationService: AuthenticationService
  ) {}
  closeResult = '';

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

  login() {
    this.authenticationService.login(this.userLogin).subscribe({
      next: (res) => {
        this.modalReference.close();
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
  }

  logout() {
    this.authenticationService.purgeUser();
    this.authenticationService.logout();
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
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
