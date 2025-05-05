import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Post} from '../post.interface';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent {
  @Input() posts!: Post[] | null;

  @Output() selectedPost: EventEmitter<Post> = new EventEmitter<Post>();

  onSelect(post: Post){
    this.selectedPost.emit(post);
  }
}
