import { Injectable } from '@angular/core';
import { CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth-service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
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
    if (this.authService.isAuthenticated()) {
      return true;
    }

    this.toastr.error('You need to be authenticated in order to reach this page');
    this.router.navigate(['/login']);
    return false;
  }
}
