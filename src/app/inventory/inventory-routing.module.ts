import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCarComponent } from './create-car/create-car.component';
import { ListCarsComponent } from './list-cars/list-cars.component';


const routes: Routes = [
{
    path: 'vehicles',
    children: [
      { path: 'list', component: ListCarsComponent },
      { path: 'create', component: CreateCarComponent },
    ]
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
