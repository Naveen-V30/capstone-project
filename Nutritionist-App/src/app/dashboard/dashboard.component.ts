import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { state } from '@angular/animations';
import { FavouritesService } from '../service/favourites.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  foodlist:any=[];
  totalResults : any;
  page:number = 1;
  constructor(private apiService : ApiService,private router:Router,private favourite:FavouritesService) { }
  searchitem:any;
  ngOnInit(): void {
    this.apiService.getfoodlist().subscribe(data=>{
      console.warn(data);
      this.foodlist=data;
      this.totalResults = 200;
    });
  }

  search(){
    this.apiService.searchfood(this.searchitem).subscribe((res:any)=>{
      this.foodlist=res.foods;
      console.log(res);
    })
  }

  details(id:any){
    this.router.navigate(["/details"],{state:{data:id}})
  }
 
  favourites(data:any){
    this.favourite.setfavourites(data);
    console.log(data);
  }

}
