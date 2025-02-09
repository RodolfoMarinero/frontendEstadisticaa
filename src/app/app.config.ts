import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { HIGHLIGHT_OPTIONS, provideHighlightOptions } from 'ngx-highlightjs';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js')
    }),
    provideAnimations()  ]    
};
