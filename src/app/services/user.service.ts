import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {User} from "../model/user.model";

@Injectable()
export class UserService {


  constructor(private http: HttpClient) { }

  baseUrl: string ='https://39977615-a21b-44b8-a6d3-1608e688da0f.mock.pstmn.io/event'; //'http://localhost:8080/user-portal/users';
  

  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
