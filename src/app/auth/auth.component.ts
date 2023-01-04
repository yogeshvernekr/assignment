import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLogin = true;
  isLoading = false;
  error: string;
  signUpMessage: string;
  emailCheck: any;
  constructor(private auth: AuthService, private router: Router) {}

  onSwitchMode(authForm: NgForm) {
    this.isLogin = !this.isLogin;
    authForm.reset();
  }

  onSubmitAuth(authForm: NgForm) {
    this.emailCheck = authForm.value;
    const email = authForm.value.email;
    const password = authForm.value.password;

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
        }
        this.isLoading = false;
      },
      error: (errorMessage) => {
        this.error = errorMessage.message;

        this.isLoading = false;
      },
    });
    // setTimeout(() => {
    //   authForm.reset();
    // }, 3000);
  }
}
