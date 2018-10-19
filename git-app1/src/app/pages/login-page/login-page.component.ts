import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { UserComponent } from '../../components/user/user.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @Input() loginId: string;
  @Input() name: string;
  @Input() password: string;

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }

  login() {
    var comp: UserComponent = new UserComponent();

    comp.name = this.name;
    comp.loginId = this.loginId;
    comp.password = this.password;

    this.userService.loginUser(comp)
      .subscribe(
        () => {
          console.log("success login");
        },
        () => {
          console.log("error login");
        },
        () => { console.log("complete login"); }
      );
  }

  register() {
    var comp: UserComponent = new UserComponent();

    comp.name = this.name;
    comp.loginId = this.loginId;
    comp.password = this.password;

    this.userService.registerUser(comp)
      .subscribe(
        () => {
          console.log("success register");
        },
        () => {
          console.log("error register");
        },
        () => { console.log("complete register"); }
      );
  }

}
