import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from '../../services/restaurant-service.service';

@Component({
  selector: 'app-fav-restaurants',
  templateUrl: './fav-restaurants.component.html',
  styleUrls: ['./fav-restaurants.component.css'],
  providers:[RestaurantServiceService]
})
export class FavRestaurantsComponent implements OnInit {

  public favList=[];

  constructor(private restaurantServiceService: RestaurantServiceService) { }
  
  ngOnInit() {
    this.showFav()
  }

  showFav(){
    this.restaurantServiceService.getFavList().subscribe((res) =>{
      this.favList = res.restaurants;
      }, (error) =>{
        alert("getting fav list does not works");
      })
    }

}
