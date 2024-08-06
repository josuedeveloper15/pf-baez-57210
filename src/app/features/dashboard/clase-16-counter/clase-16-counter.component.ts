import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrease,
  increment,
} from '../../../core/store/counter/counter.actions';
import { RootState } from '../../../core/store';
import {
  selectCounterState,
  selectCounterStateValue,
  selectCounterStateValueX10,
} from '../../../core/store/counter/counter.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clase-16-counter',
  templateUrl: './clase-16-counter.component.html',
  styleUrl: './clase-16-counter.component.scss',
})
export class Clase16CounterComponent {
  value = 0;

  value$: Observable<number>;

  constructor(private store: Store<RootState>) {
    this.value$ = this.store.select(selectCounterStateValue);

    // this.store.select(selectCounterStateValueX10).subscribe({
    //   next: (v) => {
    //     this.value = v;
    //   },
    // });
  }

  onIncrement() {
    this.store.dispatch(
      increment({
        number: 2,
      })
    );
  }

  onDecrease() {
    this.store.dispatch(decrease());
  }
}
