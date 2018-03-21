import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Resdb } from '../configs/resdb.config';
import { App } from '../configs/app.config';

@Injectable()
export class RestaurantServiceService {

  constructor(private http: Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});

  searchRestaurant(searchedText){
    return this.http.get(Resdb.search_api+searchedText)
    .map(data => data.json(),
    (error: any)=>console.log("error in searching data"));
  }

  addRestaurant(restaurant){
    return this.http.post(App.apiUrl+"restaurants", restaurant, {headers: this.headers})
     .map(data => data.json(),
   (error: any)=>console.log("error in adding restaurant"));
  }

  getFavList(){
    return this.http.get(App.apiUrl+"db")
     .map(data => data.json(),
   (error: any)=>console.log("error in getting fav list"));
  }

  deleteRestaurant(favList){
    return this.http.delete(App.apiUrl+"restaurants/"+favList.id, { headers: this.headers })
    .map(data => data.json(),
    (error: any)=>console.log("error in deleting movieel"));
  }

}
