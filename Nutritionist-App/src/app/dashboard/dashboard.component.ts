import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  foodlist:any=[];
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.apiService.getfoodlist().subscribe(data=>{
      console.warn(data);
      this.foodlist=data;
    });
  }

  search(food:String){
   food=food.split(" ").join("%20");
    this.apiService.searchfood(food).subscribe(data=>{
      console.log(data);
    })
  }

 

}
