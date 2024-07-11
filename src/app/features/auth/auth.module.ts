import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { AuthMockService } from '../../core/services/auth-mock.service';
import { APP_CONFIG } from '../../core/injection-tokens';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    // {
    //   provide: AuthService,
    //   useClass: AuthService,
    // },

    {
      provide: APP_CONFIG,
      useValue: {
        baseURL: '...',
        version: '2.0',
      },
    },
  ],
})
export class AuthModule {}
