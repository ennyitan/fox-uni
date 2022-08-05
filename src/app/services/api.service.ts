import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _url: string = "http://localhost:3000/posts"

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<any>(this._url)
  }
}
