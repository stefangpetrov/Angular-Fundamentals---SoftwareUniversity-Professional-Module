import { Component, OnInit } from '@angular/core';
import {ExercisesService} from '../exercises-service/exercises.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../auth/auth-service/auth.service';

@Component({
  selector: 'app-exercise-edit',
  templateUrl: './exercise-edit.component.html',
  styleUrls: ['./exercise-edit.component.css']
})
export class ExerciseEditComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  exercise;
  name: string;
  muscleGroup: string;
  imageUrl: string;
  description: string;
  creatorName: string;
  constructor(private router: Router,
              private exerciseService: ExercisesService,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private authService: AuthService) { }

  ngOnInit() {

    this.exerciseService.getExerciseDetails(this.id).subscribe(data => {
        this.exercise = data;

      },
      err => {
        this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });
  }

  edit() {
    this.exerciseService.editExercise(this.id, this.exercise).subscribe(data => {
      this.toastr.success('Successfully edited the exercise');
      this.router.navigate(['/exercises/catalog']);
    },
      err => {
        this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });
  }

}
