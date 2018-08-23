import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  logged = localStorage.getItem('authtoken') !== null;
  username = localStorage.getItem('username');
  dropdownLi = 'nav-item dropdown';
  dropdownMenu = 'dropdown-menu';

  constructor(private authService: AuthService, private router: Router) {
    router.events.subscribe((val) => {
      this.logged = localStorage.getItem('authtoken') !== null;
      this.username = localStorage.getItem('username');
    });
  }

  ngOnInit() {
  }


  expand() {
    console.log('vleznah')
    this.dropdownLi.endsWith('show')
      ? this.dropdownLi = 'nav-item dropdown'
      : this.dropdownLi = 'nav-item dropdown show';

    this.dropdownMenu.endsWith('show')
      ? this.dropdownMenu = 'dropdown-menu'
      : this.dropdownMenu = 'dropdown-menu show';
  }

  logout() {
    this.authService.logout();
  }

}
