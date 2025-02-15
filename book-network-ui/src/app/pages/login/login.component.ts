import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/services';
import { TokenService } from '../../services/token/token.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  errorMsg: Array<string> = [];
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService
  ) {
    // Khởi tạo FormGroup cho form đăng nhập
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return; // Nếu form không hợp lệ thì không tiếp tục
    }

    this.errorMsg = [];
    const authRequest = this.loginForm.value;

    this.authService.authenticate({ body: authRequest }).subscribe({
      next: (response) => {
        this.tokenService.token = response.token as string;
        console.log('Navigating to /books');
        setTimeout(() => {
          this.router.navigateByUrl('/books').then((success) => {
            if (success) {
              console.log('Navigation successful!');
            } else {
              console.error('Navigation failed!');
            }
          });
        }, 100);
      },
      error: (err) => {
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        } else {
          this.errorMsg.push(err.error.businessErrorDescription);
        }
      },
      complete: () => {
        console.log('Login request completed');
      },
    });
  }

  register() {
    this.router.navigate(['register']);
  }
}
