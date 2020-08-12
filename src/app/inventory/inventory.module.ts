import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { CreateCarComponent } from './create-car/create-car.component';
import { ListCarsComponent } from './list-cars/list-cars.component';


@NgModule({
  declarations: [
    CreateCarComponent, 
    ListCarsComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
  ]
})
export class InventoryModule { }
