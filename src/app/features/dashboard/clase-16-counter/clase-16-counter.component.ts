import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrease,
  increment,
} from '../../../core/store/counter/counter.actions';
import { RootState } from '../../../core/store';

@Component({
  selector: 'app-clase-16-counter',
  templateUrl: './clase-16-counter.component.html',
  styleUrl: './clase-16-counter.component.scss',
})
export class Clase16CounterComponent {
  value = 0;

  constructor(private store: Store<RootState>) {
    this.store.subscribe({
      next: (data) => {
        this.value = data.counter.value;
      },
    });
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrease() {
    this.store.dispatch(decrease());
  }
}
