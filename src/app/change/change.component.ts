import { Component } from '@angular/core';
import { CounterServiceService } from '../counter-service.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent {
  constructor(public counterService:CounterServiceService){}

  ngOnInit(){
  }

}
