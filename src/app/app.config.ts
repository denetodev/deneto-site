import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fff5eb',
      100: '#ffe8d3',
      200: '#ffd1a7',
      300: '#ffb47a',
      400: '#ff8c4d',
      500: '#ff6200', // Sua cor principal
      600: '#e65600',
      700: '#cc4c00',
      800: '#a33d00',
      900: '#7a2e00',
      950: '#4d1d00',
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          prefix: 'p',
          darkModeSelector: false,
          cssLayer: false,
        },
      },
    }),
    provideClientHydration(),
    provideHttpClient(),
  ],
};
