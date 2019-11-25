import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private ds:DataService,private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.ds.isLoggedIn() == false) {
      this.router.navigate(['/dangnhap']);
      alert('Hãy đăng nhập trước khi thi nào ^^')
      localStorage.removeItem('token');
      return false;
    }
    return true;

  }

}
