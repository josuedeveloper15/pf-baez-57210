import { Component, OnDestroy } from '@angular/core';
import {
  delay,
  filter,
  first,
  interval,
  map,
  Observable,
  of,
  skip,
  Subscription,
  take,
} from 'rxjs';
import { CoursesService } from '../../../core/services/courses.service';
import { Course } from '../courses/models';

@Component({
  selector: 'app-clase-10-rxjs',
  templateUrl: './clase-10-rxjs.component.html',
  styleUrl: './clase-10-rxjs.component.scss',
})
export class Clase10RxjsComponent implements OnDestroy {
  myRandomNumber$ = new Observable<number>((subscriber) => {
    let counter = 0;
    setInterval(() => {
      counter++;
      subscriber.next(counter);
    }, 1000);
  });

  myInterval$ = interval(1500);

  obtenerNombreUsuario$ = of('Mariano').pipe(delay(1000));

  obtenerNombreUsuario2$ = new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.next('Mariano');
    }, 1000);
  });

  myRandomNumberSubscription?: Subscription;

  valorContador = 0;

  cursos$: Observable<Course[]>;

  constructor(private coursesService: CoursesService) {
    this.cursos$ = coursesService.getCourses();

    this.obtenerNombreUsuario$.subscribe({
      next: (v) => console.log(v),
    });

    // this.myRandomNumberSubscription = this.myInterval$
    //   .pipe(
    //     // take(20),
    //     // filter((valor) => valor > 5)
    //     // skip(1),
    //     // first()
    //     // take(1)
    //     map((valor) => valor * 2)
    //   )
    //   .subscribe({
    //     // Es cuando recibimos un valor (sin error)
    //     next: (randomNumber) => {
    //       console.log(randomNumber);
    //       this.valorContador = randomNumber;
    //     },
    //     // Cuando emite un error
    //     error: () => {},
    //     // Cuando el observable va a dejar de emitir valores (se completa)
    //     complete: () => {},
    //   });
  }

  ngOnDestroy(): void {
    // ngOnDestroy es un ciclo de vida de angular que se ejecuta cada vez que el componente
    // es destruido (sale de la pantalla)
    // this.myRandomNumberSubscription?.unsubscribe();
  }
}
