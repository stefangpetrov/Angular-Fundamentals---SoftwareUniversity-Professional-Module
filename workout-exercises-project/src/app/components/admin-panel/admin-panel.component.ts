import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../services/auth-service/auth.service';
import {AdminService} from '../../services/admin-service/admin.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  users: Array<Object>;
  constructor(private router: Router,
              private adminService: AdminService,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private authService: AuthService) { }

  ngOnInit() {
    console.log(this.adminService)
    this.adminService.getAllUsers().subscribe(data => {
      data = data.filter(u => u.username !== localStorage.getItem('username'));
      this.users = data;
    },
      err => {
        this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });
  }

}