import { Component, OnInit, Input } from '@angular/core';
import { RestaurantServiceService } from '../../../services/restaurant-service.service';

@Component({
  selector: 'app-fav-restaurant',
  templateUrl: './fav-restaurant.component.html',
  styleUrls: ['./fav-restaurant.component.css'],
  providers:[RestaurantServiceService]
})
export class FavRestaurantComponent implements OnInit {

  @Input() favList: any;

  constructor(private restaurantServiceService: RestaurantServiceService) { }

  ngOnInit() {
  }

  deleteRestaurant(favList){
    this.restaurantServiceService.deleteRestaurant(favList).subscribe((res) =>{
      this.favList = res.restaurants;
      }, (error) =>{
        alert("deleting restaurant does not works");
      })
  }

}
