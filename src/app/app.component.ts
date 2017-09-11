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
  /*   let lastUser: User = null; */
  const users: User[] = [];
  let user: User;
    let seed: string;
/*     lastUser = await this.randomuserService.get(null);
    console.log(lastUser); */


    try {
      while (true){
        const person = await this.randomuserService.get(seed = null);
        seed = person.email;
        if (person.dob.getFullYear() < 1975 )
       {
         user = person;
         break;
       }
       users.push(person);


    } }
    catch (error) {console.log(error);

    }



  console.log(users);
}
}
