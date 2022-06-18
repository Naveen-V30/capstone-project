import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardComponent } from '../dashboard/dashboard.component'; 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(private httpClient : HttpClient) { }

  getfoodlist(){
    let url = "https://api.nal.usda.gov/fdc/v1/foods/list?dataType=&pageSize=200&pageNumber=1&sortOrder=asc&api_key=4N2BSMKlg5dzqmFqbaFtSQ7fGncxQqNl4baJwzCK";
    return this.httpClient.get(url);
  }

  searchfood(food:String){
    food=food.split(" ").join("%20");
    let url = "https://api.nal.usda.gov/fdc/v1/foods/search?query="+food+"&dataType=&pageSize=200&pageNumber=1&sortOrder=asc&api_key=4N2BSMKlg5dzqmFqbaFtSQ7fGncxQqNl4baJwzCK";
    return this.httpClient.get(url);
  }
}
