import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, of, Subject } from 'rxjs';
import { User } from '../../features/dashboard/users/models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NotifierService } from './notifier.service';
import { Store } from '@ngrx/store';
import { RootState } from '../store';
import { setAuthUser, unsetAuthUser } from '../store/auth/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private VALID_TOKEN = 'lksfdjglfdkgjklfdkjgldfjisdhfjsdfsdk';

  constructor(
    private http: HttpClient,
    private router: Router,
    private notifier: NotifierService,
    private store: Store<RootState>
  ) {}

  login(data: { email: string; password: string }) {
    this.http
      .get<User[]>(environment.apiUrl + '/users', {
        params: {
          email: data.email,
          password: data.password,
        },
      })
      .subscribe({
        next: (response) => {
          if (!response.length) {
            alert('Usuario o password invalido');
          } else {
            const authUser = response[0];
            localStorage.setItem('token', authUser.token);
            this.store.dispatch(setAuthUser({ payload: authUser }));

            this.router.navigate(['dashboard', 'home']);
          }
        },
        error: (err) => {
          this.notifier.sendNotification('Error al iniciar sesion');
        },
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.store.dispatch(unsetAuthUser());

    this.router.navigate(['auth', 'login']);
  }

  verifyToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      return of(false);
    }
    return this.http
      .get<User[]>(environment.apiUrl + '/users', {
        params: {
          token,
        },
      })
      .pipe(
        map((response) => {
          if (!response.length) {
            return false;
          } else {
            const authUser = response[0];
            localStorage.setItem('token', authUser.token);
            this.store.dispatch(setAuthUser({ payload: authUser }));

            return true;
          }
        })
      );
  }

  verificarToken() {}

  obtenerUsuarioAutenticado() {}

  /**
   * Ejercitacion Promesas y Observables
   */

  obtenerUsuarioObservable(): Observable<any> {
    return new Observable((observer) => {
      setInterval(() => {
        observer.next({
          name: 'Name fake',
          email: 'fake@mail.com',
        });
        // observer.complete();
        // observer.error('Error desconocido');
      }, 2000);
    });
  }

  obtenerUsuarioPromise(): Promise<any> {
    return new Promise((resolve, reject) => {
      reject('Error desconocido');

      setTimeout(() => {
        resolve({
          name: 'Name fake',
          email: 'fake@mail.com',
        });
      }, 2000);
    });
  }
}
