import { Component, OnInit, Input } from '@angular/core';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit {

  constructor() { }
  @Input() users: User[] = [];

  ngOnInit() {
  }

}
