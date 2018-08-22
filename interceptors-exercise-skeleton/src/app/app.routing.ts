import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import {AllFurnitureComponent} from './furniture/all-furniture/all-furniture.component';
import {FurnitureDetailsComponent} from './furniture/furniture-details/furniture-details.component';
import {MyFurnitureComponent} from './furniture/my-furniture/my-furniture.component';
import {CreateFurnitureComponent} from './furniture/create-furniture/create-furniture.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'furniture', children: [
      { path: 'all', component: AllFurnitureComponent },
      { path: 'details/:id', component: FurnitureDetailsComponent },
      { path: 'mine', component: MyFurnitureComponent },
      { path: 'create', component: CreateFurnitureComponent },
    ] },


]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {  }
