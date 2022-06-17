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
  searchitem:any;
  ngOnInit(): void {
    this.apiService.getfoodlist().subscribe(data=>{
      console.warn(data);
      this.foodlist=data;
    });
  }

  search(){
    this.apiService.searchfood(this.searchitem).subscribe((res:any)=>{
      this.foodlist=res.foods;
      console.log(res);
    })
  }

 

}
