import { Component, OnInit } from '@angular/core';
import {ExercisesService} from '../exercises-service/exercises.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../auth/auth-service/auth.service';

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
               private toastr: ToastrService,
               private authService: AuthService) { }

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
      this.authService.getAllUsers().subscribe(users => {
        const user = users.filter(u => u.username === localStorage.getItem('username'))[0];
        const exercises = user.exercises;
        exercises.push(data._id);
        user.exercises = exercises;
        console.log(exercises)
        this.authService.editUser(user._id, user).subscribe(userr => {
          },
          err => {
            this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
          });

      });
      this.router.navigate(['/exercises/mine']);
    },
      err => {
        this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });
  }

}
