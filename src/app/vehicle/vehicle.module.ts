import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleRegisterComponent } from './vehicle-register/vehicle-register.component';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';



@NgModule({
  declarations: [
    VehicleListComponent,
    VehicleRegisterComponent,
    VehicleDetailComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule
  ]
})
export class VehicleModule { }
