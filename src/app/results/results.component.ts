import { Observable } from 'rxjs/Observable';
import { ResultsService } from './../services/results.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/';

import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  restaurants: any[];

  constructor(
    private route: ActivatedRoute,
    private service: ResultsService) { 
    
  }

  ngOnInit() {
    console.log('results component fired');
    this.route.params.subscribe(params => {
      this.restaurants = JSON.parse(params['results']);
      console.log(this.restaurants);
      
   }); 
    
    
    

    
  }

}
