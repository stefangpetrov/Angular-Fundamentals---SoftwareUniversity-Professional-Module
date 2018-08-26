import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../auth/auth-service/auth.service';
import {AdminService} from '../admin-service/admin.service';


@Component({
  selector: 'app-admin-user-edit',
  templateUrl: './admin-user-edit.component.html',
  styleUrls: ['./admin-user-edit.component.css']
})
export class AdminUserEditComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  user;
  constructor(private router: Router,
              private adminService: AdminService,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private authService: AuthService) { }

  ngOnInit() {
    this.adminService.getUserById(this.id).subscribe(data => {
      this.user = data;
      console.log(this.user.role);
    },
      err => {
        this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });
  }

  edit() {
    const message = this.adminService.validateEditUserForm(this.user.username, this.user.email, this.user.role);
    if (!message.success) {
      this.toastr.error(message.error);
      return;
    }
    this.adminService.editUser(this.id, this.user).subscribe(data => {
      this.toastr.success('Successfully edited the user profile');
      this.router.navigate(['/admin/panel']);
    },
      err => {
        this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });
  }

}
