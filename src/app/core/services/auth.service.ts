import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login() {}

  // async login() {
  //   // console.log('EJECUTANDO LOGIN REAL');
  //   console.log('START');
  //   await this.obtenerUsuarioPromise()
  //     // Cuando promise se resuelve satisfactoriamente
  //     .then((usuario) => {
  //       console.log('USUARIO', usuario);
  //     })
  //     // Atrapamos el error
  //     .catch((err) => {
  //       alert(err);
  //     })
  //     .finally(() => {});
  //   console.log('END');
  // }

  // login() {
  //   this.obtenerUsuarioObservable().subscribe({
  //     // Se ejecuta cuando el observable emite un valor (sin errores)
  //     next: (usuario) => {
  //       console.log(usuario);
  //     },
  //     // Se ejecuta cuando el observable emite un error
  //     error: (error) => {
  //       console.log('OCURRIO ALGO', error);
  //     },
  //     // Se ejecuta cuando el observable deja de emitir valores
  //     complete: () => {
  //       console.log(
  //         'El observable se completo, por ende no va a emitir mas valores'
  //       );
  //     },
  //   });
  // }

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
