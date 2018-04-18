import { Component } from '@angular/core';
import { SearchService } from './services/search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})
export class AppComponent {
  public results:any=[];
  name:string;
  flag :boolean;
  searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchService) {
    
    if(this.searchTerm$){
    this.searchService.search(this.searchTerm$)
      .subscribe(res => {
        this.results = res;
        if(res!="default")
        {
          this.flag=true;
       }
        else{
          this.flag=false;
        }
      });
    }
    
}
}