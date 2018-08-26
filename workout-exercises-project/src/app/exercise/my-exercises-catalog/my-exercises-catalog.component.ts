import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {ExercisesService} from '../exercises-service/exercises.service';

@Component({
  selector: 'app-my-exercises-catalog',
  templateUrl: './my-exercises-catalog.component.html',
  styleUrls: ['./my-exercises-catalog.component.css']
})
export class MyExercisesCatalogComponent implements OnInit {
  exercises: Array<object>;
  muscleGroup;

  constructor(private exerciseService: ExercisesService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {

    this.exerciseService.getAllExercises().subscribe(data => {

        this.exercises = data.sort((a, b) => a._kmd.lmt <= b._kmd.lmt).filter(e => e.creatorName === localStorage.getItem('username'));
      },
      err => {

        this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });

  }

  onMuscleChanged() {
    this.exerciseService.getAllExercises().subscribe(data => {
        this.exercises = data.sort((a, b) => a._kmd.lmt <= b._kmd.lmt).filter(e => e.creatorName === localStorage.getItem('username'));
        if (this.muscleGroup !== 'All') {
          // @ts-ignore
          this.exercises = this.exercises.filter((m) => m.muscleGroup === this.muscleGroup);
        }
      },
      err => {
        console.log(err);
        this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });
  }

  search(query) {
    const value = query['searched'].toLowerCase();
    this.exerciseService.getAllExercises().subscribe(data => {
        if (this.muscleGroup === 'All' || this.muscleGroup === undefined) {
          this.exercises = data.sort((a, b) => a._kmd.lmt <= b._kmd.lmt)
            .filter((e) => e.name.toLowerCase().includes(value));
        } else {
          this.exercises = data.sort((a, b) => a._kmd.lmt <= b._kmd.lmt)
            .filter(e => e.muscleGroup === this.muscleGroup)
            .filter((e) => e.name.includes(value));
        }
        // @ts-ignore
        this.exercises = this.exercises.filter((e) => e.creatorName === localStorage.getItem('username'));
      },
      err => {

        this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });

  }
}
