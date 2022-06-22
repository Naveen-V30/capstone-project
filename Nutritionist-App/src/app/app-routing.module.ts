import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DetailsComponent } from './details/details.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { RouteGuard } from './service/route.guard';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[RouteGuard]},
  {path:'details',component:DetailsComponent,canActivate:[RouteGuard]},
  {path:'favourites',component:FavouritesComponent,canActivate:[RouteGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
