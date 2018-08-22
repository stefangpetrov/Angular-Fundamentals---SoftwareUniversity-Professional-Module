import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movies} from '../models/movies';

const apiKey = '6fdb15be6eb68934af29506ef8d21f02';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  path = 'https://api.themoviedb.org/3/';
  popular = 'discover/movie?sort_by=popularity.desc';
  authentication = '&api_key=';
  theatres = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
  kids = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  drama = 'discover/movie?with_genres=18&primary_release_year=2014';
  movie = 'movie/';
  movieAuth = '?api_key=';
  constructor(private http: HttpClient) { }

  getPopular(): Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.popular}${this.authentication}${apiKey}`);
  }

  getTheatres(): Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.theatres}${this.authentication}${apiKey}`);
  }

  getKids(): Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.kids}${this.authentication}${apiKey}`);
  }

  getDrama(): Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.drama}${this.authentication}${apiKey}`);
  }

  getMovie(id): Observable<Object> {
    return this.http.get<Object>(`${this.path}${this.movie}` + id + `${this.movieAuth}${apiKey}`);
  }

  findAMovie(name) {
    return this.http.get(`${this.path}${name}${this.authentication}${apiKey}`);
  }
}
