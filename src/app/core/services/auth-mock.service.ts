export class AuthMockService {
  login() {
    //
    console.log('EJECUTANDO LOGIN FALSO');
    return {
      name: 'FAKE USER',
      email: '...',
    };
  }

  verificarToken() {}

  obtenerUsuarioAutenticado() {}
}
