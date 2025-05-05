import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PostsService} from './posts.service';
import {User} from './user.interface';
import {UsersComponent} from './users/users.component';
import {AsyncPipe} from '@angular/common';
import {Observable, of} from 'rxjs';
import {Post} from './post.interface';
import {PostsComponent} from './posts/posts.component';
import {PostComment} from './post-comment.interface';
import {CommentsComponent} from './comments/comments.component';

@Component({
  selector: 'app-root',
  imports: [UsersComponent, AsyncPipe, PostsComponent, CommentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  postsService = inject(PostsService);

  users$ = this.postsService.getUsers();
  posts$?: Observable<Post[]>;
  comments$?: Observable<PostComment[]>;

  selectedUser: User | undefined = undefined;
  selectedPost: Post | undefined = undefined;

  selectedUserChanged(user: User) {
    this.selectedUser = user;

    this.posts$ = this.postsService.getPosts(user.id);
    this.comments$ = of([]);
  }

  selectedPostChanged(post: Post) {
    this.selectedPost = post;

    this.comments$ = this.postsService.getComments(post.id);
  }


}
