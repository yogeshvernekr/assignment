import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];
  htmlTag: HTMLElement = document.getElementsByTagName('html')[0];
  isLogin = true;
  isLoading = false;
  error: string;
  signUpMessage: string;
  emailCheck: any;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    // add the css-style to the html and body tags
    this.bodyTag.classList.add('login-page');
    this.htmlTag.classList.add('login-page');
  }

  ngOnDestroy() {
    // remove the the body classes
    this.bodyTag.classList.remove('login-page');
    this.htmlTag.classList.remove('login-page');
  }

  onSwitchMode(authForm: NgForm) {
    this.isLogin = !this.isLogin;
    this.error = null;
    this.signUpMessage = null;

    authForm.reset();
  }

  onSubmitAuth(authForm: NgForm) {
    this.emailCheck = authForm.value;
    const email = authForm.value.email;
    const password = authForm.value.password;
    this.error = null;
    this.signUpMessage = null;

    this.isLoading = true;

    let authObs: Observable<any>;

    if (this.isLogin) {
      authObs = this.auth.signin(email, password);
    } else {
      authObs = this.auth.signup(email, password);
    }

    authObs.subscribe({
      next: (resData) => {
        if (this.isLogin) {
          this.router.navigate(['/dashboard']);
        } else {
          this.signUpMessage = 'You have successfully signed up';
          this.isLogin = true;
        }
        this.isLoading = false;
      },
      error: (errorMessage) => {
        this.error = errorMessage.message;

        this.isLoading = false;
      },
    });
  }
}
