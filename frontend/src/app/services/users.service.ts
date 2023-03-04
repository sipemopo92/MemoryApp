import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseUsers } from '../models/responseApi';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:3000/users'
  private test = false;
  private user: User | null = null;
  private userLogged: boolean = false;

  constructor(private httpClient: HttpClient) { 
    if (this.test) {
      this.user = {id: 1, name: 'pippo'}
      this.userLogged = true;
    }
  }

  isUserLogged() {
    return this.userLogged;
  }

  setUserLogged(user: User) {
    this.user = user;
    this.userLogged = true;
  }

  getUserLogged() {
    return this.user;
  }


  getUsers() {
    return this.httpClient.get<ResponseUsers>(this.apiUrl);
  }

  getUserByName(name: string) {
    return this.httpClient.get<ResponseUsers>(this.apiUrl + '/userByName?name=' + name);
  }

  addUser(name: string) {
    let body = {name: name}
    return this.httpClient.post<ResponseUsers>(this.apiUrl, body);
  }

  logout() {
    this.user = null;
    this.userLogged = false;
  }

}
