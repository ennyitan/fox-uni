import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../interface/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.apiUrl

  constructor(private http : HttpClient) { }

  getUser(): Observable <User[]>{
    return this.http.get<User[]>(this.apiUrl + 'todos')
    
  }

}
