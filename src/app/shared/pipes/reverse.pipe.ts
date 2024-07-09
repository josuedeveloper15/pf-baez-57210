import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  /**
   *
   * @param value Es el valor que recibe el pipe
   * @param args El primer arg puede ser lowercase para convertir el texto a minusculas
   * @returns
   */
  transform(value: string, ...args: unknown[]): string {
    console.log(args);
    const result = value.split('').reverse().join('');
    if (args[0] === 'lowercase') {
      return result.toLowerCase();
    } else {
      return result.toUpperCase();
    }
  }
}
