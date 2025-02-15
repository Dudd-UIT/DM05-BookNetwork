import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../token/token.service';

export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService); // ✅ Inject TokenService
  const token = tokenService.token; // 🔥 Lấy token từ TokenService
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
