import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comments } from '../interface/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  createComment(comment: Comments): Observable<Comments>{
    return this.http.post<Comments>(`${this.apiUrl}comments`,comment)
  }
}
