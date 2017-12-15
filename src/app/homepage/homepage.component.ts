import { ResultsService } from './../services/results.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
public searchBox = '';
  constructor(
    private service: ResultsService,
    private router: Router) { }

  ngOnInit() {
  }

  search(search) {
  console.log('search submitted', search);
   this.service.searchResults(search)
   .subscribe(results=> {
    this.router.navigate(['/searchresults', {results: JSON.stringify(results.restaurants)}]);
     console.log(results);
   })
   
  }
}
