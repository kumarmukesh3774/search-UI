import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantSearchComponent } from './components/restaurants/restaurant-search/restaurant-search.component';
import { RestaurantListComponent } from './components/restaurants/restaurant-list/restaurant-list.component';
import { RestaurantShowComponent } from './components/restaurants/restaurant-list/restaurant-show/restaurant-show.component';
import { FavRestaurantsComponent } from './components/fav-restaurants/fav-restaurants.component';
import { FavRestaurantComponent } from './components/fav-restaurants/fav-restaurant/fav-restaurant.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
=======
>>>>>>> 1943cc8a992dfe2d2e418562e27cdfe0b91a774d
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RestaurantsComponent,
    RestaurantSearchComponent,
    RestaurantListComponent,
    RestaurantShowComponent,
    FavRestaurantsComponent,
    FavRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
=======
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
>>>>>>> 1943cc8a992dfe2d2e418562e27cdfe0b91a774d
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
