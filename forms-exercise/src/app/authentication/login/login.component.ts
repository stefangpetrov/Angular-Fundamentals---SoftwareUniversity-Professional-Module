import { Component, OnInit } from '@angular/core';
import {LoginModel} from '../models/login.model';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFailed: boolean;
  errMsg: string;
  model: LoginModel;
  constructor(private authService: AuthService,
              private router: Router) {
    this.model = new LoginModel('', '');
  }

  login() {
    this.authService.login(this.model)
      .subscribe(data => this.successfulLogin(data), err => {
        this.loginFailed = true;
        this.errMsg = err.error.description;
      });
  }

  successfulLogin(data) {
    this.authService.authtoken = data['_kmd']['authtoken'];
    localStorage.setItem('authtoken', data['_kmd']['authtoken']);
    localStorage.setItem('username', data['_kmd']['authtoken']);
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
