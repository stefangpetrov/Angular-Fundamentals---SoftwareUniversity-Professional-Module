import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ExercisesService} from '../../services/exercises-service/exercises.service';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css']
})
export class ExerciseDetailsComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  exercise: Object;
  isCreator: boolean;
  constructor(private router: Router,
              private exerciseService: ExercisesService,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private authService: AuthService) { }

  ngOnInit() {

    this.exerciseService.getExerciseDetails(this.id).subscribe(data => {
      this.exercise = data;
        this.isCreator = localStorage.getItem('username') === data.creatorName;
      },
      err => {
        this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });
  }

  delete() {
    this.exerciseService.deleteExercise(this.id).subscribe(data => {
        this.toastr.success('Successfully deleted an exercise');
        this.router.navigate(['/exercises/catalog']);
        this.authService.getAllUsers().subscribe(users => {
            const user = users.filter(u => u.username === localStorage.getItem('username'))[0];
            const exercises = user.exercises;
            exercises.splice(exercises.indexOf(this.id, 1));
            user.exercises = exercises;
            this.authService.editUser(user._id, user).subscribe(userr => {
              },
              err => {
                this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
              });
          },
          err => {
            this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
          });
      },
      err => {
        this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });
  }
}
