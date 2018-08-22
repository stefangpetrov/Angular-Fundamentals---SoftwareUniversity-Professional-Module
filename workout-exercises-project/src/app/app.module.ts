import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';


import { AuthService} from './services/auth-service/auth.service';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {AppRoutingModule} from './app-routing.module';
import { CatalogComponent } from './components/catalog/catalog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuard} from './guards/auth-guard/auth.guard';
import { AddExerciseComponent } from './components/add-exercise/add-exercise.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';
import { ExerciseEditComponent } from './exercise-edit/exercise-edit.component';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
