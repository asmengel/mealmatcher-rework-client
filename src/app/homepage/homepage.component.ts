import { ResultsService } from './../services/results.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  options: FormGroup;
  public searchBox = '';
  constructor(
    private service: ResultsService,
    private router: Router,
    fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: `auto`,
    });
  }

  ngOnInit() {
  }
 // main function geocodes city searched and then sends data to zomato api and navigates user to next page
  search(search, input: number) {

    this.service.geoCode(search)
      .flatMap(response => {
        //this.google(response); will be added in a later update to supply places pictures will be moved to detailed results to save api call
        return this.service.searchResults(response.results[0].geometry.location.lat, response.results[0].geometry.location.lng, input);
      })
      .subscribe(results => {
        this.router.navigate(['/searchresults', { results: JSON.stringify(results.restaurants) }]);
      });


  }
  // google(data) {
  //   console.log('google function', data);
  //   this.service.googlePlaces(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng)
  //   .subscribe(response => {
  //     console.log('googleplaces response',response)
  //   })
  // }
}
