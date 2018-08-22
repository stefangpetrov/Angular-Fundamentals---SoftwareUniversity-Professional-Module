import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { AuthGuard } from './guards/auth-guard/auth.guard';
/*import { RecipeModule } from './recipe/recipe.module';*/
import {CatalogComponent} from './components/catalog/catalog.component';

const routes: Route[] = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'exercises/catalog', component: CatalogComponent, canActivate: [AuthGuard]},
  {path: 'exercises/add', component: CatalogComponent, canActivate: [AuthGuard]},
  {path: 'exercises/edit/:id', component: CatalogComponent, canActivate: [AuthGuard]},
  {path: 'exercises/delete/:id', component: CatalogComponent, canActivate: [AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
