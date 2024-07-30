import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Observable, tap } from 'rxjs';
import { User } from './users/models';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  showFiller = false;

  mostrarClase10 = true;

  authUser$: Observable<User | null>;

  nombreEntorno = environment.envName;

  constructor(private authService: AuthService) {
    this.authUser$ = this.authService.authUser$;
  }

  logout() {
    this.authService.logout();
  }
}
