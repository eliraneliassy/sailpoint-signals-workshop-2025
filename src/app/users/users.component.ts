import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../user.interface';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {

  @Input() users!: User[] | null;

  @Output() selectedUser: EventEmitter<User> = new EventEmitter<User>();

  selectUser(user: User){
    this.selectedUser.emit(user);
  }


}
