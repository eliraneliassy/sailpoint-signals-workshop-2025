import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {PostComment} from '../post-comment.interface';

@Component({
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent {
  @Input() comments!: PostComment[] | null;


}
