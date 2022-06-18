import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  foodlist:any=[];
  id:any;
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    console.log(history.state.data);
    this.foodlist = Array.of(history.state.data);
  } 
}
