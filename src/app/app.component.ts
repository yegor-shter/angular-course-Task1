import { Component } from '@angular/core';
import { User } from './user';
import { RandomuserService } from './randomuser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private users: User[] = [];
  private lastUser: User;
  constructor(
    private randomuserService: RandomuserService) { }

  public async loadUser() {


  let user: User;

  let seed: string;


    try {
      while (true){
        const person = await this.randomuserService.get(seed );
        seed = person.email;
        if (person.dob.getFullYear() > 1975 )
       {
        user = person;

       }
        // tslint:disable-next-line:one-line
        else
       {
          this.lastUser = person;
          break;
       }
       this.users.push(person);
    }

   }
   catch (error) {console.log(error);}



  console.log(this.users, this.lastUser);
}
}
