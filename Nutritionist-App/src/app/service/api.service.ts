import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = '4N2BSMKlg5dzqmFqbaFtSQ7fGncxQqNl4baJwzCK';
  constructor(private httpClient : HttpClient) { }

  public getfoodlist(){
    return this.httpClient.get('https://api.nal.usda.gov/fdc/v1/foods/list?dataType=Branded&sortBy=publishedDate&sortOrder=asc&api_key=${this.API_KEY}');
  }
}
