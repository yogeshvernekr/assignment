import { HttpClient } from '@angular/common/http';
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
  users: user[];
  constructor(private router: Router, private http: HttpClient) {}

  fetchChartData() {
    return this.http.get<user[]>(
      'https://crud-auth-22e24-default-rtdb.asia-southeast1.firebasedatabase.app/chartData.json'
    );
  }
}
