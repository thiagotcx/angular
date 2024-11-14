import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  { path: 'entrar', component: LoginComponent }, // PUBLIC
  { path: 'cadastro', component: RegisterComponent },  // PUBLIC
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] }, // PRIVATE
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
