import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { FlagComponent } from './app/flag.component';

bootstrapApplication(FlagComponent, appConfig)
  .catch((err) => console.error(err));
