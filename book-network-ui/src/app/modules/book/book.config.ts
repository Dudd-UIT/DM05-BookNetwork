import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { bookRoutes } from './book.routes';

export const bookConfig: ApplicationConfig = {
  providers: [provideRouter(bookRoutes)],
};
