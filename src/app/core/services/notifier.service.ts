import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class NotifierService {
  private notify$ = new Subject<string>();

  // notify2$ = new Observable();

  constructor() {
    this.notify$.subscribe({
      next: (txt) => {
        Swal.fire(txt, '', 'info');
      },
    });
  }

  sendNotification(txt: string) {
    this.notify$.next(txt);
  }
}
