import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {AppRoutingModule} from './app-routing.module';
import { CatalogComponent } from './components/catalog/catalog.component';
import { AddExerciseComponent } from './components/add-exercise/add-exercise.component';
import { ExerciseDetailsComponent } from './components/exercise-details/exercise-details.component';
import { ExerciseEditComponent } from './components/exercise-edit/exercise-edit.component';
import { MyExercisesCatalogComponent } from './components/my-exercises-catalog/my-exercises-catalog.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminUserEditComponent } from './components/admin-user-edit/admin-user-edit.component';
import { AdminUserDeleteComponent } from './components/admin-user-delete/admin-user-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    CatalogComponent,
    AddExerciseComponent,
    ExerciseDetailsComponent,
    ExerciseEditComponent,
    MyExercisesCatalogComponent,
    NotFoundComponent,
    AdminPanelComponent,
    AdminUserEditComponent,
    AdminUserDeleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
