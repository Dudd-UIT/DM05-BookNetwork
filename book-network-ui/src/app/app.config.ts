import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { CodeInputModule } from 'angular-code-input';
import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { httpTokenInterceptor } from './services/interceptors/http-token.interceptor';
import { ApiModule } from './services/api.module';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(CodeInputModule, ApiModule.forRoot()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptors([httpTokenInterceptor])),
  ],
};
