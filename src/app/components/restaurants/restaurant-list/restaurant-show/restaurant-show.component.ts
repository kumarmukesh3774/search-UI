import { Component, OnInit, Input } from '@angular/core';
import { RestaurantServiceService } from '../../../../services/restaurant-service.service';

@Component({
  selector: 'app-restaurant-show',
  templateUrl: './restaurant-show.component.html',
  styleUrls: ['./restaurant-show.component.css'],
  providers:[RestaurantServiceService]
})
export class RestaurantShowComponent implements OnInit {

  @Input() resto: any;

  constructor(private restaurantServiceService: RestaurantServiceService) { }

  ngOnInit() {
  }

  // Add favourite restaurant to database
  addRestaurant(resto){
    this.restaurantServiceService.addRestaurant(resto).subscribe((res) =>{
  		
  	}, (error) =>{

  	})
  }
}
