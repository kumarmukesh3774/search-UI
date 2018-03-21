import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestaurantServiceService } from '../../../services/restaurant-service.service';

@Component({
  selector: 'app-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.css'],
  providers:[RestaurantServiceService]
})
export class RestaurantSearchComponent implements OnInit {
  public restaurantList=[];
  searchedText: string ="";
  @Output() success = new EventEmitter<any>();
  constructor(private restaurantServiceService: RestaurantServiceService) { }

  ngOnInit() {
  }

  searchRestaurants() {
    this.restaurantServiceService.searchRestaurant(this.searchedText).subscribe((res) =>{
      this.restaurantList = res.restaurants;
      this.success.emit({
        'restaurantList': this.restaurantList
      });
      }, (error) =>{
  
      })
    }
}
