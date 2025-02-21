import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PublicDashboardComponent  } from './app/public-dashboard.component';

bootstrapApplication(PublicDashboardComponent , appConfig).catch((err) =>
  console.error(err)
);
