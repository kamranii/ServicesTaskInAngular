import { Component } from '@angular/core';
import { CounterServiceService } from './counter-service.service';
import { UsersService } from './users-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];
  constructor(){}
  // onSetToInactive(id: number) {
  //   this.usersService.changeToInactiveUser(id);
  // }

  // onSetToActive(id: number) {
  //  this.usersService.changeToActiveUser(id);
  // }
}
