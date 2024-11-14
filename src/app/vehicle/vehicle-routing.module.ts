import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleRegisterComponent } from './vehicle-register/vehicle-register.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { permissionGuard } from '../shared/guards/permission.guard';
import { authGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  { path: '', 
    pathMatch: 'full',
    component: VehicleListComponent,
    canActivate: [authGuard]
  },                                // veiculo/    
  { path: 'cadastrar', 
    pathMatch: 'full', 
    component: VehicleRegisterComponent,
    canActivate: [authGuard]
   },                               // veiculo/cadastrar
  { path: ':id', 
    component: VehicleDetailComponent,
    canActivate: [authGuard]
   },                               //  veiculo/80
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
