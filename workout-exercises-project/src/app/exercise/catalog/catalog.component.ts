import { Component, OnInit } from '@angular/core';
import {ExercisesService} from '../exercises-service/exercises.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  exercises: Array<object>;
  muscleGroup;

  constructor(private exerciseService: ExercisesService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {

    this.exerciseService.getAllExercises().subscribe(data => {

      this.exercises = data.sort((a, b) => a._kmd.lmt <= b._kmd.lmt);
    },
      err => {

        this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });

  }

  onMuscleChanged() {
    this.exerciseService.getAllExercises().subscribe(data => {
      console.log('vlqzoh');
      console.log(this.muscleGroup)
        if (this.muscleGroup !== 'All') {
          this.exercises = data.sort((a, b) => a._kmd.lmt <= b._kmd.lmt).filter((m) => m.muscleGroup === this.muscleGroup);
        } else {
          this.exercises = data.sort((a, b) => a._kmd.lmt <= b._kmd.lmt);
        }

      },
      err => {
        console.log(err);
        this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });
  }

  search(query) {
    const value = query['searched'];
    this.exerciseService.getAllExercises().subscribe(data => {

        if (this.muscleGroup === 'All') {
          this.exercises = data.sort((a, b) => a._kmd.lmt <= b._kmd.lmt).filter((e) => e.name.includes(value));
        } else {
          this.exercises = data.sort((a, b) => a._kmd.lmt <= b._kmd.lmt)
            .filter(e => e.muscleGroup === this.muscleGroup)
            .filter((e) => e.name.includes(value));
        }
      },
      err => {

        this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });
  }
}
