import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import { AuthGuard } from './auth/auth-guard/auth.guard';
/*import { RecipeModule } from './recipe/recipe.module';*/
import {CatalogComponent} from './exercise/catalog/catalog.component';
import {AddExerciseComponent} from './exercise/add-exercise/add-exercise.component';
import {ExerciseEditComponent} from './exercise/exercise-edit/exercise-edit.component';
import {ExerciseDetailsComponent} from './exercise/exercise-details/exercise-details.component';
import {MyExercisesCatalogComponent} from './exercise/my-exercises-catalog/my-exercises-catalog.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {AdminPanelComponent} from './admin/admin-panel/admin-panel.component';
import {AdminGuard} from './admin/admin-guard/admin.guard';
import {AdminUserDeleteComponent} from './admin/admin-user-delete/admin-user-delete.component';
import {AdminUserEditComponent} from './admin/admin-user-edit/admin-user-edit.component';
import {AboutComponent} from './shared/about/about.component';

const routes: Route[] = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
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
