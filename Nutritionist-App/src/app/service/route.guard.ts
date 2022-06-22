import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate():boolean{
    let token = localStorage.getItem("token")
    if(token){
      return true
    }
    else{
      this.router.navigateByUrl('login')
      alert('Unauthorized Request..!!')
      return false
    }
  }
  
}
