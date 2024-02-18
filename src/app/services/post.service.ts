import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../Post';
import { Response } from '../Response';
import { environment } from '../../environmets/environmets';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/post`;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Response<Post[]>> {
    return this.http.get<Response<Post[]>>(this.apiUrl);
  }

  createPost(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}
