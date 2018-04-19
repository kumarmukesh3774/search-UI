import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Injectable()
export class SearchService {
  baseUrl: string = 'http://localhost:8800/q/';

  public keywords:any=[];
  public defaultKeywords:any=[""];

  constructor(private http: Http) { }

  search(terms: Observable<string>) {
   // alert("this is an alert");
    return terms.debounceTime(100)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {

    this.keywords=this.http
        .get(this.baseUrl + term)
        .map(res => res.json(),
        (error: any)=>this.handleError(error));
        //halert("this is an error alert");
        return this.keywords; 


    }

        private handleError(error: Response){
          return Observable.throw(error.statusText);
        }
        
  
}