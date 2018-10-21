import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserComponent } from '../components/user/user.component';
import { Observable, Subscriber } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private loggedInUser: UserComponent = null;

  constructor(private httpClient: HttpClient, private router : Router) { }

  private subscriber: Subscriber<{}>;

  loginUser(user: UserComponent) {
    const rq = {
      name: user.name,
      loginId: user.loginId,
      password: user.password
    };

    var obs: Observable<UserComponent> = this.httpClient.post<UserComponent>("/api/login", rq);
    obs.subscribe(succ => {
      this.loggedInUser = succ;
      this.subscriber.next(this.loggedInUser.name);
      this.router.navigate(['/view-statistics']);
    });
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

  getObservable(): Observable<{}> {
    const simpleObservable = new Observable((observer) => {
      this.subscriber = observer;
    });
    return simpleObservable;
  }

  logout() {
    console.log("User logged out.");
    this.loggedInUser = null;
    this.subscriber.next(null);
    this.router.navigate(['/login']);
  }
}
