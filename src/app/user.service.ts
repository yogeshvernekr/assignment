import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { empty, map, tap } from 'rxjs';
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
  users: user[];
  constructor(private router: Router, private http: HttpClient) {}

  fetchUsers() {
    return this.http.get<user[]>(
      'https://crud-auth-22e24-default-rtdb.asia-southeast1.firebasedatabase.app/users.json'
    );
  }

  retrieveUsers(data: any) {
    this.users = data;
  }

  getUsers() {
    return this.users;
  }

  getUser(name: string) {
    const server = this.users.find((s) => {
      return s.name === name;
    });
    return server;
  }

  addUser(name: string, number: number, address: string) {
    let user = {
      name,
      number,
      address,
    };
    this.users.push(user);
    this.http
      .put(
        'https://crud-auth-22e24-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',
        this.users
      )
      .subscribe(() => {});
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
    this.http
      .put(
        'https://crud-auth-22e24-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',
        this.users
      )
      .subscribe(() => {});
    this.usersUpdated.emit(user);
  }

  deleteUser(name: string | undefined) {
    const index = this.users.findIndex((object) => {
      return object.name === name;
    });

    this.users.splice(index, 1);
    this.http
      .put(
        'https://crud-auth-22e24-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',
        this.users
      )
      .subscribe(() => {});
    this.router.navigate(['/', 'users']);
  }
}
