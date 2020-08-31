import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CarService } from '../car.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss']
})
export class CreateCarComponent implements OnInit {

  vehicleForm: FormGroup;

  constructor(
    private carService: CarService,
    private fb: FormBuilder) { 
      this.vehicleForm = this.fb.group({
        name: [],
      });
    }

  ngOnInit(): void {
  }

  create(): void {
    console.log("Creating a new car!");
    console.log(this.vehicleForm.value);
  }

}
