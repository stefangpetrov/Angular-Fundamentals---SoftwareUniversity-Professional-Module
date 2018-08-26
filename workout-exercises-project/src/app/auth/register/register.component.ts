import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    const email = form.value.email;
    const username = form.value.username;
    const repeatPassword = form.value.repeatPassword;
    const password = form.value.password;

    const message = this.authService.validateRegisterForm(username, email, password, repeatPassword);
    console.log(message);
    if (!message.success) {
      this.toastr.error(message.error);
      return;
    }
    this.toastr.success('Registering..');
    this.authService.register(username, email, password).subscribe(data => {
      console.log(data);

      this.toastr.success('Successful registration.');
      this.router.navigate(['/login']);
      },
        err => {
      this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
    });
  }

}
