import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
  activeToInactive:number = 0;
  inactiveToActive:number = 0;
  constructor() {}
}
