import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../../services/keycloak/keycloak.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // errorMsg: Array<string> = [];
  // loginForm: FormGroup;

  constructor(
    private keycloakService: KeycloakService
  ) {

  }
  async ngOnInit() {
    this.keycloakService.init();
    this.keycloakService.login();
  }

  // login() {
  //   if (this.loginForm.invalid) {
  //     return; // Nếu form không hợp lệ thì không tiếp tục
  //   }

  //   this.errorMsg = [];
  //   const authRequest = this.loginForm.value;

  //   this.authService.authenticate({ body: authRequest }).subscribe({
  //     next: (response) => {
  //       this.tokenService.token = response.token as string;
  //       console.log('Navigating to /books');
  //       setTimeout(() => {
  //         this.router.navigateByUrl('/books').then((success) => {
  //           if (success) {
  //             console.log('Navigation successful!');
  //           } else {
  //             console.error('Navigation failed!');
  //           }
  //         });
  //       }, 100);
  //     },
  //     error: (err) => {
  //       if (err.error.validationErrors) {
  //         this.errorMsg = err.error.validationErrors;
  //       } else {
  //         this.errorMsg.push(err.error.businessErrorDescription);
  //       }
  //     },
  //     complete: () => {
  //       console.log('Login request completed');
  //     },
  //   });
  // }

  // register() {
  //   this.router.navigate(['register']);
  // }
}
