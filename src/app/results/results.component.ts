
import { Observable } from 'rxjs/Observable';
import { ResultsService } from './../services/results.service';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router/';


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
  restaurant = [];
  constructor(
    private route: ActivatedRoute,
    private service: ResultsService,
    
    private router: Router) { 
    
  }
  // takes data from homepage and parses it for the html to display
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.restaurants = JSON.parse(params['results']);
   }); 
   }
  // navigates user to detailed results page and sends all avaliable data
   moreDetails(restaurant) {
     this.restaurant = restaurant ;
     this.router.navigate([`/searchresults/${restaurant.name}/${restaurant.id}`, {restaurant: JSON.stringify(this.restaurant)}])
  }

  // may incoporate this later for pictures if style is right and i can afford that may api calls
  // google(data) {
  //   console.log('google function', data);
  //   this.service.googlePlaces(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng)
  //   .subscribe(response => {
  //     console.log('googleplaces response',response)
  //   })
  // }
}
