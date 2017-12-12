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
    this.service.getAll()
    .map(res => res.json())
    // let obs = Observable.combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ])
    // .switchMap(combined => {
    //   let name = combined[0].get('name');
    //   return this.service.getAll();
    // })
    .subscribe((restaurants: any) => {
      //console.log(JSON.parse(restaurants._body));
      this.restaurants = restaurants.restaurants;
      console.log(this.restaurants);
    })

    ;
  }

}
