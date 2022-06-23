import { Component, OnInit } from '@angular/core';
import { User } from '../services/users/user.model';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  users:User[] = [];
  reversedName: string = '';

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.all().subscribe((res: any) => {
      this.users = res;
    });
  }

  handleReverseName(id:string) {
    this.reversedName = this.usersService.reverseName(id);
  }
}