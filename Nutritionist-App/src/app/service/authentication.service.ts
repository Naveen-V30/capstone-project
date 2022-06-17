import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtClientService } from './jwt-client.service';


export interface loginForm{
  name:string;
  email:string;
  password:string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient,private jwtservice:JwtClientService) { }

  postuser(data:any){
    return this.http.post<any>("http://localhost:3010/register",data);
  }

  getuser(){
    return this.http.get<any>("http://localhost:3000/users/");
  }
}
