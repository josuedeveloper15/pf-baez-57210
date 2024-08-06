import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { first, map, skip, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAuthUser } from '../store/auth/auth.selectors';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const store = inject(Store);

  return store
    .select(selectAuthUser)
    .pipe(
      map((authUser) =>
        authUser?.role !== 'ADMIN'
          ? router.createUrlTree(['dashboard', 'home'])
          : true
      )
    );
};
