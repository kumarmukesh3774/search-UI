import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { SearchService } from './services/search.service';
import { Subject } from 'rxjs/Subject';
>>>>>>> 1943cc8a992dfe2d2e418562e27cdfe0b91a774d

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
=======
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
>>>>>>> 1943cc8a992dfe2d2e418562e27cdfe0b91a774d
