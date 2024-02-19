import { Injectable } from '@angular/core';
import { environment } from '../../environmets/environmets';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../Response';
import { Comment } from '../Comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/post`;

  constructor(private http: HttpClient) {}

  createComment(id: Number, data: Comment): Observable<Response<Comment>> {
    const url = this.apiUrl + '/comments/' + id;
    console.log(url);
    return this.http.post<Response<Comment>>(url, data);
  }
}
