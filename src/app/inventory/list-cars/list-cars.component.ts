import { Component, OnInit } from '@angular/core';

import { Car } from '../Car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss']
})
export class ListCarsComponent implements OnInit {

  vehicles: Car[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(
      data => this.vehicles = data
    );
  }

}
