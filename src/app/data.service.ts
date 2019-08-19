import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private logIn: boolean; // Managing the Session


  getLogin(): boolean {
    return this.logIn;
  }

  setLogin(logIn: boolean) {
    this.logIn = logIn;
  }

  constructor() { }

}
