import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../auth-service/auth.service';
import {Observable} from 'rxjs';

const APP_KEY = 'kid_H1YewYR8X';
const APP_SECRET = '0f9fd80ce27046dbbaed8b7b9c7fd683';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(private http: HttpClient,
              private router: Router,
              private authService: AuthService) {

  }
  getAllExercises(): Observable<any> {
    return this.http.get(`https://baas.kinvey.com/appdata/${APP_KEY}/exercises`, {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + `${this.authService.getAuthToken()}`)
      .set('Content-Type', 'application/json')
    });
  }

  getExerciseDetails(id): Observable<any> {
    return this.http.get(`https://baas.kinvey.com/appdata/${APP_KEY}/exercises/${id}`, {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + `${this.authService.getAuthToken()}`)
        .set('Content-Type', 'application/json')
    });
  }

  addExercise(obj): Observable<any> {
    return this.http.post(`https://baas.kinvey.com/appdata/${APP_KEY}/exercises`, JSON.stringify(obj), {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + `${this.authService.getAuthToken()}`)
        .set('Content-Type', 'application/json')
    });
  }

  editExercise(id, obj): Observable<any> {
    return this.http.put(`https://baas.kinvey.com/appdata/${APP_KEY}/exercises/${id}`, JSON.stringify(obj), {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + `${this.authService.getAuthToken()}`)
        .set('Content-Type', 'application/json')
    });
  }

  deleteExercise(id): Observable<any> {
    return this.http.delete(`https://baas.kinvey.com/appdata/${APP_KEY}/exercises/${id}`, {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + `${this.authService.getAuthToken()}`)
        .set('Content-Type', 'application/json')
    });
  }
}



