import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { IUser } from '../model/user';
import { AuthenticationService } from '../services/authentication.service';

@Directive({
  selector: '[appHasRole]',
})
export class HasRoleDirective {
  currentUser!: IUser;
  requiredRole!: number;
  isVisible = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.currentUser = this.authenticationService.user;
    this.authenticationService.userObs.subscribe((user) => {
      this.currentUser = user;
      this.updateView();
    });
    this.updateView();
  }

  @Input()
  set appHasRole(role: number) {
    this.requiredRole = role;
    this.updateView();
  }

  private updateView() {
    if (this.hasRole()) {
      if (!this.isVisible) {
        this.isVisible = true;
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    } else {
      this.isVisible = false;
      this.viewContainer.clear();
    }
  }

  private hasRole(): boolean {
    if (this.currentUser && this.currentUser.role && this.requiredRole) {
      return this.currentUser.role === this.requiredRole;
    }
    return false;
  }
}
