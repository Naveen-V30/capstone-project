import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  favourites:any[]=[];
  constructor() { }

  setfavourites(data:any){
    this.favourites.push(data);
    console.log(data);
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
