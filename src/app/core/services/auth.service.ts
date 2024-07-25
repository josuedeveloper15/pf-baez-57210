import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { User } from '../../features/dashboard/users/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private FAKE_USER: User = {
    email: 'fake@mail.com',
    password: '123456',
    role: 'ADMIN',
  };
  private VALID_TOKEN = 'lksfdjglfdkgjklfdkjgldfjisdhfjsdfsdk';

  private _authUser$ = new BehaviorSubject<User | null>(null);
  authUser$ = this._authUser$.asObservable();

  constructor(private router: Router) {}

  login() {
    this._authUser$.next(this.FAKE_USER);
    localStorage.setItem('token', this.VALID_TOKEN);
    this.router.navigate(['dashboard', 'courses']);
  }

  logout() {
    localStorage.removeItem('token');
    this._authUser$.next(null);
    this.router.navigate(['auth', 'login']);
  }

  verifyToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    const isValid = this.VALID_TOKEN === token;
    if (isValid) {
      this._authUser$.next(this.FAKE_USER);
    }

    return of(isValid);
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
