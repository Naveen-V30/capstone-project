import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(private httpClient : HttpClient) { }

  getfoodlist(){
    let url = "https://api.nal.usda.gov/fdc/v1/foods/list?dataType=Branded&api_key=4N2BSMKlg5dzqmFqbaFtSQ7fGncxQqNl4baJwzCK";
    return this.httpClient.get(url);
  }
}
