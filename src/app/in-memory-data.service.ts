import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Car } from './inventory/Car';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
      let cars = [
        { id: 1, name: 'car1' },
        { id: 2, name: 'car2' },
        { id: 3, name: 'car3' },
        { id: 4, name: 'car4' },
        { id: 5, name: 'car5' },
        { id: 6, name: 'car6' },
      ];
      return {cars};
  }
}
