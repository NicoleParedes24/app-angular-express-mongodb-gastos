import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { App } from './app/app';
import { rutas } from './app/routes';

bootstrapApplication(App, {
  providers: [
    provideRouter(rutas),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
