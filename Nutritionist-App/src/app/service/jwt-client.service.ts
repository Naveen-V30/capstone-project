import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http:HttpClient) { }

  public generatetoken(data:any){
    return this.http.post("http://localhost:3010/authenticate",data,{responseType:'text' as 'json'});
  }

  public welcome(token: any){
    let tokenstr = "Bearer "+token;
    const headers = new HttpHeaders().set("Authorization",tokenstr);
    this.http.get("http://localhost:3010/users/",{headers,responseType:'text' as 'json'})
  }
}
