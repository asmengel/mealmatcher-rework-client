import { ResultsService } from './../services/results.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
public searchBox = '';
  constructor(
    private service: ResultsService) { }

  ngOnInit() {
  }

  search(search) {
  console.log('search submitted', search);
   this.service.searchResults(search)
   .subscribe(results=> {
     console.log(results);
   })
  }
  callBack(data) {
    


  }
}
