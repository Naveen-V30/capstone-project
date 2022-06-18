import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../service/favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favourites:any=[];
  constructor(private favouritesservice:FavouritesService) { }

  ngOnInit(): void {
    this.favourites=this.favouritesservice.getfavourites();
    console.warn(this.favourites);
  }

  removefavourites(id:any){
    this.favouritesservice.deletefavourites(id);
  }
}
