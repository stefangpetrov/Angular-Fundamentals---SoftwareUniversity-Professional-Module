import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { AuthGuard } from './guards/auth-guard/auth.guard';
/*import { RecipeModule } from './recipe/recipe.module';*/
import {CatalogComponent} from './components/catalog/catalog.component';
import {AddExerciseComponent} from './components/add-exercise/add-exercise.component';
import {ExerciseEditComponent} from './exercise-edit/exercise-edit.component';
import {ExerciseDetailsComponent} from './exercise-details/exercise-details.component';
import {MyExercisesCatalogComponent} from './components/my-exercises-catalog/my-exercises-catalog.component';

const routes: Route[] = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'exercises/catalog', component: CatalogComponent, canActivate: [AuthGuard]},
  {path: 'exercises/add', component: AddExerciseComponent, canActivate: [AuthGuard]},
  {path: 'exercises/edit/:id', component: ExerciseEditComponent, canActivate: [AuthGuard]},
  {path: 'exercises/details/:id', component: ExerciseDetailsComponent, canActivate: [AuthGuard]},
  {path: 'exercises/mine', component: MyExercisesCatalogComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
