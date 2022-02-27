import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { ModalityComponent } from './components/modality/modality.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { RouteGuard } from './guard/route.guard';

const routes: Routes = [
  { path: 'user', redirectTo: 'user/login', pathMatch:'full'},
  {
    path: 'user',
    component: UserComponent,
    children:[
      { path: 'login', component: LoginComponent},
      { path: 'dashboard', component: DashboardComponent, canActivate: [RouteGuard]},
    ]
  },
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: '**', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component: ModalityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
