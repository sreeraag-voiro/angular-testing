import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable, of } from 'rxjs'; // Add imports

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Array<User> = [  // Add employee object
    {
      id: '1',
      name: 'Jane',
      role: 'Designer',
      pokemon: 'Blastoise'
    },
    {
      id: '2',
      name: 'Bob',
      role: 'Developer',
      pokemon: 'Charizard'
    },
    {
      id: '3',
      name: 'Jim',
      role: 'Developer',
      pokemon: 'Venusaur'
    },
    {
      id: '4',
      name: 'Adam',
      role: 'Designer',
      pokemon: 'Yoshi'
    }
  ];

  constructor() { }

  all(): Observable<Array<object>> {
    return of(this.users);
  }

  findOne(id: string) {
    const user = this.users.find(user => user.id === id);
    return user;
  }

  reverseName(id: string) {
    const user = this.findOne(id);
    const reversedName = user ? user.name.split('').reverse().join('') : '';
    return reversedName;
  }
}