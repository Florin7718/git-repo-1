import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { UserComponent } from '../../components/user/user.component';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }

  public logout(){
    this.userService.logout();
  }

}
