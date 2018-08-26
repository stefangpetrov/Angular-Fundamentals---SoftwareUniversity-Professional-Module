import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { AddExerciseComponent} from './add-exercise/add-exercise.component';
import { CatalogComponent} from './catalog/catalog.component';
import { MyExercisesCatalogComponent} from './my-exercises-catalog/my-exercises-catalog.component';
import { ExerciseDetailsComponent} from './exercise-details/exercise-details.component';
import { ExerciseEditComponent} from './exercise-edit/exercise-edit.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [AddExerciseComponent,
  CatalogComponent,
  MyExercisesCatalogComponent,
  ExerciseDetailsComponent,
  ExerciseEditComponent
  ]
})
export class ExerciseModule { }
