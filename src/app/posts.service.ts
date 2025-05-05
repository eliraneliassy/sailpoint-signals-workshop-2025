import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user.interface';
import {Post} from './post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  httpClient = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getPosts(userId: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }

  getComments(postId: number): Observable<any> {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }


}
