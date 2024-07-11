import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { AuthModule } from './features/auth/auth.module';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DashboardModule, AuthModule],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
