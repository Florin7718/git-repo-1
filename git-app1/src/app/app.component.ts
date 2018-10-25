import { Component } from '@angular/core';
import { UserServiceService } from './services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'git-app1';

  private isUserLoggedIn: boolean = false;
  private isCollapsed: boolean = true;
  private btnTextCollapsed: string = "[ - ]";
  private btnTextUncollapsed: string = "[ + ]";
  private btnText: string = "[ - ]";

  private type: string;
  private message: string;

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.isUserLoggedIn = (this.userService.getCurrentUser() != null);
    this.userService.getObservable().subscribe(() => {
      this.isUserLoggedIn = (this.userService.getCurrentUser() != null);
    });
  }

  menuClicked() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.btnText = this.btnTextCollapsed;
    } else {
      this.btnText = this.btnTextUncollapsed;
    };
  }

}
