import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterServiceService } from '../counter-service.service';
import { UsersService } from '../users-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  constructor(private usersService:UsersService
    ){}
  //getUsers
  ngOnInit(){
    this.users = this.usersService.inactiveUsers;
  }
  //users of active user
  users:string[] = [];

  onSetToActive(id: number) {
    this.usersService.changeToActiveUser(id);
  }
}