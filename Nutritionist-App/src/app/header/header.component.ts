import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../service/loader.service';
import { Router } from '@angular/router';
import { FavouritesService } from '../service/favourites.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loader:LoaderService,private router:Router,private favourites:FavouritesService) { }

  ngOnInit(): void {
  }

  onlogout(){
    localStorage.removeItem("token");
    this.router.navigate(['login']);
      this.favourites.favourites.splice(0,this.favourites.favourites.length);
  
  }
}
