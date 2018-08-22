import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import {a} from '@angular/core/src/render3';

const APP_KEY = 'kid_ryB1mBK87';
const APP_SECRET = '990eb8b393524956b719096e77edbd0e';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  validateRegisterForm(username, email, password, repeatedPassword) {
    if (username === '' || username === null || username === undefined || username.length < 4) {
      return {
        success: false,
        error: 'Username should be at least 4 characters long.'
      };
    }
    if (!this.emailRegex.test(email) || email === '' || email === null || email === undefined) {
      return {
        success: false,
        error: 'Invalid email.'
      };
    }
    if (password === '' || password === null || password === undefined || password.length < 4) {
      return {
        success: false,
        error: 'Password should be at least 4 characters long.'
      };
    }
    if (password !== repeatedPassword) {
      return {
        success: false,
        error: 'Password do not match.'
      };
    }

    return {
      success: true,
      error: ''
    };
  }

  register(username, email, password): Observable<any> {
    const body = JSON.stringify({username, email, password, role: 'user', exercises: []});
    return this.http.post(`https://baas.kinvey.com/user/${APP_KEY}`, body, {
      headers: new HttpHeaders().set('Authorization', 'Basic ' + btoa(`${APP_KEY}:${APP_SECRET}`))
        .set('Content-Type', 'application/json')
    });
  }

  login(username, password): Observable<any> {
    const body = JSON.stringify({username, password});
    return this.http.post(`https://baas.kinvey.com/user/${APP_KEY}/login`, body, {
      headers: new HttpHeaders().set('Authorization', 'Basic ' + btoa(`${APP_KEY}:${APP_SECRET}`))
        .set('Content-Type', 'application/json')
    });
  }

  getCurrentUser(userId, authtoken): Observable<any> {
    return this.http.get(`https://baas.kinvey.com/user/${APP_KEY}/` + userId, {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + authtoken)
        .set('Content-Type', 'application/json')
    });
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('authtoken') !== null;
  }

  isAdmin(): boolean {
    return localStorage.getItem('role') === 'admin';
  }

  getAuthToken() {
    return localStorage.getItem('authtoken');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
