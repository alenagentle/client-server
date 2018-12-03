import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {User} from '../shared/user.model';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {

    myForm : FormGroup;
    constructor(){
        this.myForm = new FormGroup({
            "surname": new FormControl(""),
            "name": new FormControl("", [Validators.required, Validators.pattern("[а-яА-Я]+")]),
            "patronymic": new FormControl(""),
            });
        }

    @Input() user: User;
    @Output() userChange: EventEmitter<User> = new EventEmitter();

    addUser() {
        console.log('name.value = ', this.myForm.controls['name'].value);
        this.user.surname = this.myForm.controls['surname'].value;
        this.user.name = this.myForm.controls['name'].value;
        this.user.patronymic = this.myForm.controls['patronymic'].value;
        this.userChange.emit(this.user);
    }
}
