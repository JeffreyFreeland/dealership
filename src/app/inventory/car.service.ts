import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from './Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = 'localhost:8000/'

  constructor(private http: HttpClient) { }

  /*
  getCars() {
      return this.http.get<Car[]>(`${this.apiUrl}cars`);
  }
  */

}
