import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth-service/auth.service';
import { ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.toastr.success('Logging in...');
    const username = form.value.username;
    const password = form.value.password;
    this.authService.login(username, password).subscribe(data => {

      if (data.role === 'admin') {
        localStorage.setItem('role', 'admin');
      } else {
        localStorage.setItem('role', 'user');
      }

      this.toastr.success('Successful login.');
      localStorage.setItem('authtoken', data._kmd.authtoken);
      localStorage.setItem('username', data.username);
      localStorage.setItem('userId', data._id);

      this.router.navigate(['/exercises/catalog']);

      },
        err => {
      console.log(err);
      this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });

  }
}
