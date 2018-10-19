import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserComponent } from '../components/user/user.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private loggedInUser: UserComponent;

  constructor(private httpClient: HttpClient) { }

  loginUser(user: UserComponent) {


    const rq = {
      name: user.name,
      loginId: user.loginId,
      password: user.password
    };

    var obs: Observable<UserComponent> = this.httpClient.post<UserComponent>("/api/login", rq);
    obs.subscribe(succ => { this.loggedInUser = succ; });
    return obs;
  }

  registerUser(user: UserComponent): Observable<void> {
    const rq = {
      name: user.name,
      loginId: user.loginId,
      password: user.password
    };

    var obs: Observable<void> = this.httpClient.post<void>("/api/register", rq);
    return obs;
  }

  getCurrentUser(): UserComponent {
    return this.loggedInUser;
  }
}
