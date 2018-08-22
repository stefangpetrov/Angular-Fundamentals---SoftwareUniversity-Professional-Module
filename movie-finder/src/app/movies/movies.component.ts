import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popular: Object;
  theatres: Object;
  kids: Object;
  drama: Object;
  searchedMovies: any;
  constructor(private moviesService: MoviesService) { }

  search(query) {
    console.log(query);
    const value = query['search'];
    this.moviesService.findAMovie(value).subscribe(data => {
      this.searchedMovies = data;
      console.log(data);
    });
  }

  ngOnInit() {
    this.moviesService
      .getPopular()
      .subscribe(data => {
        this.popular = data;
      });
    this.moviesService
      .getTheatres()
      .subscribe(data => {
        this.theatres = data;
      });
    this.moviesService
      .getKids()
      .subscribe(data => {
        this.kids = data;
      });
    this.moviesService
      .getDrama()
      .subscribe(data => {
        this.drama = data;
      });
  }

}
