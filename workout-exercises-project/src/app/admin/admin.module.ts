import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {AdminUserDeleteComponent} from './admin-user-delete/admin-user-delete.component';
import {AdminUserEditComponent} from './admin-user-edit/admin-user-edit.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [AdminPanelComponent,
  AdminUserDeleteComponent,
  AdminUserEditComponent]
})
export class AdminModule { }
