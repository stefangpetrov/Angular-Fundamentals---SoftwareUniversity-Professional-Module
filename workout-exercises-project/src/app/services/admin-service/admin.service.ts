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

  constructor(private http: HttpClient,
              private router: Router,
              private authService: AuthService) {

  }

  getAllUsers(): Observable<any> {
    return this.http.get(`https://baas.kinvey.com/user/${APP_KEY}`, {
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
