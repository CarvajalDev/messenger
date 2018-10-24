import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  friendId: any;
  friends: User[];
  friend: User;
  today: any = Date.now();

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {

    this.friendId = this.activatedRoute.snapshot.params['uid'];
    console.log(this.friendId);

    this.friends = this.userService.getFriends();

    this.friend = this.friends.find( (record) => {
      return record.uid == this.friendId;
    } );

    console.log(this.friend);

  }

  ngOnInit() {
  }

}
