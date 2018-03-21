import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  public restaurants =[];
  constructor() { }

  ngOnInit() {
  }

  setRestaurantlist(event) {
  	this.restaurants = event.restaurantList;
  }
}
