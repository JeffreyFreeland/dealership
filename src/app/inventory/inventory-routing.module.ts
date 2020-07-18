import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCarComponent } from './create-car/create-car.component';


const routes: Routes = [
  { path: 'create', component: CreateCarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
