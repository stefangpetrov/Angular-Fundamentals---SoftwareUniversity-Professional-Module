import { Injectable } from '@angular/core';
import { CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth-service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.check();
  }

  check(): boolean {
    if (this.authService.isAdmin()) {
      return true;
    }
    this.router.navigate(['/exercises/catalog']);
    this.toastr.error('You need to be an admin in order to reach this page');
    return false;
  }
}
