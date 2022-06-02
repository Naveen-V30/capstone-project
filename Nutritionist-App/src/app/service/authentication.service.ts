import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface loginForm{
  email:string;
  password:string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  login(loginForm:loginForm){
    return this.http.post<any>('http:/localhost:3000/login',{email:loginForm.email,password:loginForm.password})
  }
}
