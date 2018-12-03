import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
	
  @Input() users: User[] = [];
  @Output() userDelete: EventEmitter<User> = new EventEmitter();
  
  deleteUser(user) {
  //console.log('list.component delete:');
  //console.log(user);
  
    this.userDelete.emit(user);
  }
}
 