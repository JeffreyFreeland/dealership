import { Component, OnInit } from '@angular/core';

import { CarService } from '../car.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss']
})
export class CreateCarComponent implements OnInit {

  constructor(private carService: CarService) { }

  ngOnInit(): void {
  }

  getCars() {
  
  }

}
