import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs/internal/Observable';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserdataService 
{
  private usersUrl: string;

  constructor(private http: HttpClient){
    this.usersUrl='http://localhost:3000/posts';
  }

  public findAll(): Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl);
  }
  
}

