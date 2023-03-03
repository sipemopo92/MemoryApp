import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  name!: string;
  showMessageUserDE = false;
  showMessageUserAE = false;

  constructor(private usersService: UsersService, private router: Router) { }

  login() {
    if (this.name) {
      this.usersService.getUserByName(this.name).subscribe(res => {
        if (res.status == 'OK' && res.data[0]) {
          this.usersService.setUserLogged(res.data[0]);
          this.router.navigate(['main']);
        }
        else {
          this.showMessageUserDE = true;
        }
      })
    }
  }

  signUp() {
    if (this.name) {
      this.usersService.addUser(this.name).subscribe( res => {
        if (res.status == 'OK') {
          this.usersService.setUserLogged(res.data[0]);
          this.router.navigate(['main']);
        } else {
          console.log(res)
          this.showMessageUserAE = true;
        }
      })
    }
  }

}
