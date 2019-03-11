import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/PostModel'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postUrl = 'https://jsonplaceholder.typicode.com/posts';
  postLimit = '?_limit=5';

  constructor(private http: HttpClient) { }

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postUrl}${this.postLimit}`);
  }
}
