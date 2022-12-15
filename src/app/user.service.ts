import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isTrue = new EventEmitter<boolean>();
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
  constructor() {}

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

  disableImg() {
    this.isTrue.emit(true);
  }
}
