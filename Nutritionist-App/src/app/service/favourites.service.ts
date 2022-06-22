import { Injectable } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FavouritesComponent } from '../favourites/favourites.component';
@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  favourites:any[]=[];
  constructor() { }

  setfavourites(data:any){
    this.favourites.push(data);
    console.warn(data);
    console.log(this.favourites);
  }
  getfavourites(){
    return this.favourites;
  }

  deletefavourites(id:any){
    this.favourites.forEach((value,index)=>{
      if(value.fdcId==id) this.favourites.splice(index,1);
  });
  }


}
