import {Component} from '@angular/core';
import {ListItemComponent} from './list-item/list-item.component';
import {ListComponent} from './list/list.component';
import {User} from './shared/user.model';
import {Data} from './shared/data.model';
import {UserService} from './user.service';
import {DataService} from './datalist/datalist.service';


const LOCAL_STORAGE_KEY = 'users';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UserService,
    DataService]
})
export class AppComponent {
    title = 'project2users';
    currentUser: User = null;
    users: User[];
    objects: Data[];

    constructor(private userService: UserService, private dataService: DataService){
        this.currentUser = this.userService.getCurrentUser();
        this.users = this.userService.getUsers();
    }

    addUser() {
        this.userService.addUser(this.currentUser);
        this.currentUser = this.userService.getCurrentUser();
        this.users = this.userService.getUsers();
    }
    deleteUser(event: User[]){
        this.userService.deleteUser(event);
        this.users = this.userService.getUsers();
    }

    getData(){
        this.dataService.getData().subscribe((data:Data[]) => {
        this.objects = data;
        console.log(this.objects);
        });
    }
}
