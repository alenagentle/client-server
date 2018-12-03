import {User} from './shared/user.model';

 const LOCAL_STORAGE_KEY = 'users';

 export class UserService{
     users: User[];

     addUser(currentUser) {
         this.users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
         this.users.push(currentUser);
         localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.users));
       }
     getCurrentUser() {
         this.users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
         return new User(this.users.length, '', '', '');
       }

     deleteUser(event: User[]){
     	console.log('service: delete...');
     	let masUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
     	for(let i=0; i<masUser.length; i++)
     	{
     		if(masUser[i].id == event.id)
     		{
     			masUser.splice(i,1)
     			console.log('перезаписанный массив = ', masUser);
     		}
       }
     	localStorage.clear;
     	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(masUser));
     	this.users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
     }

     getUsers() {
         return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
     }
 }
