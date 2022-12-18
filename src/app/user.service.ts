import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
export interface user {
  name: string;
  number: number;
  address: string;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  isTrue = new EventEmitter<boolean>();
  usersUpdated = new EventEmitter<user>();
  users = [
    {
      name: 'Max',
      number: 84841563,
      address: `2083 Prospect Street, NJ 08102`,
    },
    {
      name: 'Harry',
      number: 6548463105,
      address: '533 Park Boulevard Lorimor, IA 50149 ',
    },
    {
      name: 'Happy',
      number: 6255883,
      address: '460 Glendale Avenue, CA 91504 ',
    },
    {
      name: 'Jerry',
      number: 41563,
      address: `2681 Desert Court
      Newark, NJ 07102`,
    },
  ];
  constructor(private router: Router) {}

  getUsers() {
    return this.users;
  }

  getUser(name: string) {
    const server = this.users.find((s) => {
      return s.name === name;
    });
    return server;
  }

  updateUser(name: string, number: number, address: string) {
    let user = {
      name,
      number,
      address,
    };
    this.users.push(user);
  }
  editUser(findname: string, name: string, number: number, address: string) {
    const index = this.users.findIndex((object) => {
      return object.name === findname;
    });
    let user = {
      name,
      number,
      address,
    };
    // this.users.splice(index, 1, user);
    this.users[index] = user;
    this.usersUpdated.emit(user);
    console.log(user);
    console.log(this.users);
  }

  deleteUser(name: string | undefined) {
    const index = this.users.findIndex((object) => {
      return object.name === name;
    });

    this.users.splice(index, 1);
    this.router.navigate(['/', 'users']);
  }

  disableImg() {
    this.isTrue.emit(true);
  }
}
