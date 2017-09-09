import { Component } from '@angular/core';
import { User } from './user';
import { RandomuserService } from './randomuser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private randomuserService: RandomuserService) { }

  public async loadUser() {
    ///const users: User[] = [];
    let lastUser: User = null;

    lastUser = await this.randomuserService.get(null);
    console.log(lastUser);
  }
}
