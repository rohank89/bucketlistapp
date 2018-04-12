import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ListService } from './list.service';
import { List } from '../models/List';

@Injectable()
export class AppStateService {

  private userList = new BehaviorSubject<List[]>([]);
  currentUserList = this.userList.asObservable();

  constructor(private cookieService: CookieService, private listServ: ListService) { }

  get userName(): string {
    return this.cookieService.get('BKT_USER');
  }
  
  public updateCurrentUserList(updatedList : List[]){
    this.userList.next(updatedList);

    // console.log('Updated injectable list with '+JSON.stringify(updatedList));
  }

  public refreshUserList(){
    this.listServ.getAllLists().subscribe(
      response => {
        this.userList.next(response);
      })
  }
}
