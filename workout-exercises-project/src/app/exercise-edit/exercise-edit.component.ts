import { Component, OnInit } from '@angular/core';
import {ExercisesService} from '../services/exercises-service/exercises.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../services/auth-service/auth.service';

@Component({
  selector: 'app-exercise-edit',
  templateUrl: './exercise-edit.component.html',
  styleUrls: ['./exercise-edit.component.css']
})
export class ExerciseEditComponent implements OnInit {

  id = this.route.snapshot.params['id'];
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
        this.name = data.name;
        this.muscleGroup = data.muscleGroup;
        this.imageUrl = data.imageUrl;
        this.description = data.description;
        this.creatorName = data.creatorName;

      },
      err => {
        this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });
  }

  edit() {
    const obj = {
      name: this.name,
      muscleGroup: this.muscleGroup,
      imageUrl: this.imageUrl,
      description: this.description,
      creatorName: this.creatorName
    };
    this.exerciseService.editExercise(this.id, obj).subscribe(data => {
      this.toastr.success('Successfully edited the exercise');
      this.router.navigate(['/exercises/catalog']);
    },
      err => {
        this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });
  }

}
