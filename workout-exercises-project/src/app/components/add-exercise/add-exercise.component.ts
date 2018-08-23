import { Component, OnInit } from '@angular/core';
import {ExercisesService} from '../../services/exercises-service/exercises.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

  name: string;
  muscleGroup: string;
  imageUrl: string;
  description: string;
  creatorName = localStorage.getItem('username');
  constructor( private exerciseService: ExercisesService,
               private router: Router,
               private toastr: ToastrService) { }

  ngOnInit() {
  }

  create() {
    const obj = {
      name: this.name,
      muscleGroup: this.muscleGroup,
      imageUrl: this.imageUrl,
      description: this.description,
      creatorName: this.creatorName
    };

    this.exerciseService.addExercise(obj).subscribe(data => {
      this.toastr.success('Successfully created an exercise');
      this.router.navigate(['/exercises/catalog']);
    },
      err => {
        this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });
  }

}
