import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { AuthGuard } from './guards/auth-guard/auth.guard';
/*import { RecipeModule } from './recipe/recipe.module';*/
import {CatalogComponent} from './components/catalog/catalog.component';
import {AddExerciseComponent} from './components/add-exercise/add-exercise.component';
import {ExerciseEditComponent} from './components/exercise-edit/exercise-edit.component';
import {ExerciseDetailsComponent} from './components/exercise-details/exercise-details.component';
import {MyExercisesCatalogComponent} from './components/my-exercises-catalog/my-exercises-catalog.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AdminPanelComponent} from './components/admin-panel/admin-panel.component';
import {AdminGuard} from './guards/admin-guard/admin.guard';
import {AdminUserDeleteComponent} from './components/admin-user-delete/admin-user-delete.component';
import {AdminUserEditComponent} from './components/admin-user-edit/admin-user-edit.component';

const routes: Route[] = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'exercises/catalog', component: CatalogComponent, canActivate: [AuthGuard]},
  {path: 'exercises/add', component: AddExerciseComponent, canActivate: [AuthGuard]},
  {path: 'exercises/edit/:id', component: ExerciseEditComponent, canActivate: [AuthGuard]},
  {path: 'exercises/details/:id', component: ExerciseDetailsComponent, canActivate: [AuthGuard]},
  {path: 'exercises/mine', component: MyExercisesCatalogComponent, canActivate: [AuthGuard]},
  {path: 'admin/panel', component: AdminPanelComponent, canActivate: [AdminGuard]},
  {path: 'admin/userDelete/:id', component: AdminUserDeleteComponent, canActivate: [AdminGuard]},
  {path: 'admin/userEdit/:id', component: AdminUserEditComponent, canActivate: [AdminGuard]},
  {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
