import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../auth-service/auth.service';
import {Observable} from 'rxjs';

const APP_KEY = 'kid_ryB1mBK87';
const APP_SECRET = '990eb8b393524956b719096e77edbd0e';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private http: HttpClient,
              private router: Router,
              private authService: AuthService) {

  }
  validateEditUserForm(username, email, role) {
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
    if (!role || role === '' || role === null || role === undefined) {
      return {
        success: false,
        error: 'Choose a correct role.'
      };
    }
    return {
      success: true,
      error: ''
    };
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`https://baas.kinvey.com/user/${APP_KEY}`, {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + `${this.authService.getAuthToken()}`)
        .set('Content-Type', 'application/json')
    });

  }

  getUserById(id): Observable<any> {
    return this.http.get(`https://baas.kinvey.com/user/${APP_KEY}/${id}`, {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + `${this.authService.getAuthToken()}`)
        .set('Content-Type', 'application/json')
    });

  }

  editUser(id, obj): Observable<any> {
    return this.http.put(`https://baas.kinvey.com/user/${APP_KEY}/${id}`, JSON.stringify(obj), {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + `${this.authService.getAuthToken()}`)
        .set('Content-Type', 'application/json')
    });
  }

  deleteUser(id): Observable<any> {
    return this.http.delete(`https://baas.kinvey.com/user/${APP_KEY}/${id}?hard=true`, {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + `${this.authService.getAuthToken()}`)
        .set('Content-Type', 'application/json')
    });
  }
}
