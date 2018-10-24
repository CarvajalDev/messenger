import { Injectable } from '@angular/core';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  friends: User[];

  constructor() {

    let User1: User = {

      nick: 'Hector',
      subnick: 'Carvajal',
      age: 21,
      email: 'correo@outlook.es',
      friend: true,
      status: true,
      uid: 1

    };

    let User2: User = {

      nick: 'Mely',
      subnick: 'Acosta',
      age: 32,
      email: 'email@mail.com',
      friend: true,
      status: true,
      uid: 2

    };

    let User3: User = {

      nick: 'beatriz',
      email: 'beatriz@correo.com',
      friend: false,
      status: false,
      uid: 3

    };


    this.friends = [User1, User2, User3];

  }

  getFriends() {
    return this.friends;
  }

}
