import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login() {
    console.log('EJECUTANDO LOGIN REAL');
  }

  verificarToken() {}

  obtenerUsuarioAutenticado() {}
}
