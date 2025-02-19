import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../token/token.service';
import { KeycloakService } from '../keycloak/keycloak.service';

export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const keycloakService = inject(KeycloakService); // ✅ Inject keycloakService
  const token = keycloakService.keycloak.token; // 🔥 Lấy token từ keycloakService
  console.log('Interceptor: Sending request with token:', token);

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`, // 🛠️ Gắn token vào request
      },
    });
  }

  return next(req);
};
