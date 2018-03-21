import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { FavRestaurantsComponent } from './components/fav-restaurants/fav-restaurants.component';

const routes: Routes = [
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'fav', component: FavRestaurantsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}