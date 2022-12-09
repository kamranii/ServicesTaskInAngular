import { Injectable } from "@angular/core";
import { CounterServiceService } from "./counter-service.service";
@Injectable({
    providedIn: 'root'
  })

export class UsersService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    constructor(private counterService:CounterServiceService){}
    changeToInactiveUser(id:number){
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.activeToInactive++;
    }
    changeToActiveUser(id:number){
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.inactiveToActive++;
    }
}