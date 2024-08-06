import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Observable, tap } from 'rxjs';
import { User } from './users/models';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { RootState } from '../../core/store';
import { selectAuthUser } from '../../core/store/auth/auth.selectors';

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

  constructor(
    private authService: AuthService,
    private store: Store<RootState>
  ) {
    this.authUser$ = this.store.select(selectAuthUser);
  }

  logout() {
    this.authService.logout();
  }
}
