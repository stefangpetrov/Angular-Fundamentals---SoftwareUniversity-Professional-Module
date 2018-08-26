import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth-service/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  logged = localStorage.getItem('authtoken') !== null;
  username = localStorage.getItem('username');

  constructor(private authService: AuthService, private router: Router) {
    router.events.subscribe((val) => {
      this.logged = localStorage.getItem('authtoken') !== null;
      this.username = localStorage.getItem('username');
    });
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
