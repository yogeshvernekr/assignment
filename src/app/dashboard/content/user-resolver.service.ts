import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from 'src/app/user.service';

@Injectable({ providedIn: 'root' })
export class UserResolverService implements Resolve<any> {
  constructor(private us: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.us.fetchUsers();
  }
}
