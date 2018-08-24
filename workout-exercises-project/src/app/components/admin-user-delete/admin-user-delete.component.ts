import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../services/auth-service/auth.service';
import {AdminService} from '../../services/admin-service/admin.service';

@Component({
  selector: 'app-admin-user-delete',
  templateUrl: './admin-user-delete.component.html',
  styleUrls: ['./admin-user-delete.component.css']
})
export class AdminUserDeleteComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  constructor(private router: Router,
              private adminService: AdminService,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private authService: AuthService) { }

  ngOnInit() {
    this.adminService.deleteUser(this.id).subscribe(data => {
      this.router.navigate(['/admin/panel']);
      this.toastr.success('Successfully deleted a user');
    },
      err => {
        this.router.navigate(['/admin/panel']);
        this.toastr.error((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });
  }

}
