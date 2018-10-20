import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../user-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInMenuGuardGuard implements CanActivate {
  constructor(private userService: UserServiceService, private router : Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.userService.getCurrentUser() != null) {
      return true;
    } else {
      this.router.navigate(['/must-be-logged-in']);
      return false;
    }
  }
  
}
