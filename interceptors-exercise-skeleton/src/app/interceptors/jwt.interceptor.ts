import {
  HttpResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService,
              private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${currentUser.token}`
        }
      });
    }
    return next.handle(request)
      .pipe(tap((res: HttpEvent<any>) => {
        if (res instanceof HttpResponse && res.body.token && res.url.endsWith('signin')) {
          this.saveToken(res.body);
          this.toastr.success(res.body.message, 'Success!');
          this.router.navigate(['/furniture/all']);
        }
        if (res instanceof HttpResponse && res.body.success && res.url.endsWith('signup')) {
          this.toastr.success(res.body.message, 'Success!');
          this.router.navigate(['/signin']);
        }
        if (res instanceof HttpResponse && res.body.success && res.url.endsWith('create')) {
          this.toastr.success(res.body.message, 'Success!');
          this.router.navigate(['/furniture/all']);
        }
      }));

  }
  private saveToken(data) {
    localStorage.setItem('currentUser', JSON.stringify({
      username: data.user.name,
      token: data.token
    }));
  }
}

