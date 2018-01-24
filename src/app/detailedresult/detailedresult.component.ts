import { ResultsService } from './../services/results.service';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { Compiler } from '@angular/core';

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router/';


import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'detailedresult',
  templateUrl: './detailedresult.component.html',
  styleUrls: ['./detailedresult.component.css']
})
export class DetailedresultComponent implements OnInit {
  data: any;
  restaurantDb: any;
  checker: any;
  returnUrl: string;
  response: any;
  reservations: any;
  photo: any;


  @Input() restaurant: any;
  constructor(
    private route: ActivatedRoute,
    private service: ResultsService,
    private router: Router,
    private _compiler: Compiler) {

  }

  ngOnInit() {
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //console.log('detailed results fired');
    this.route.params.subscribe(params => {
      this.restaurant = JSON.parse(params['restaurant']);
      console.log(this.restaurant);
      this.seeGuests(this.restaurant);
      this.showMap(this.restaurant);
      this.google(this.restaurant.location.latitude, this.restaurant.location.longitude)
      this._compiler.clearCache();
    })


  }
  google(lat, lng) {
    console.log('google function', lat, lng);
    this.service.googlePlaces(lat, lng)
      .subscribe(response => {
        console.log('googleplaces response', response)
        this.photo = response.results
        console.log('photos', this.photo);
      })
  }

  coords = [];
  showMap(data) {
    let lat = Number(data.location.latitude);
    let long = Number(data.location.longitude);
    //console.log('lat', lat, 'long', long);
    return this.coords.push(lat) && this.coords.push(long);
  }

  seeGuests(data) {
    let res = this.service.seeGuests(data.id)
      .subscribe(res => {
        //console.log('see guests', res)
        this.reservations = res.UsersInterested
      },
      error => {
        if (error instanceof NotFoundError) {
          this.reservations = null;
        }
        else {
          alert('unhandled error')
        }
        console.log('error', error);
      })
    console.log('past response', res);

  }
  join(id) {

    if (localStorage.getItem('token')) {
      const rest = {

        RestaurantId: this.restaurant.id,
        RestaurantName: this.restaurant.name,
        RestaurantAddress: this.restaurant.location,
      }

      //console.log('local storage present');
      this.service.join(id, rest)
        .subscribe(result => {
          this.seeGuests(this.restaurant);

        }, error => {
          console.log(error);
          this.router.navigate([`/login`, { returnUrl: window.location.pathname }]);
        })
    }
    else {
      //console.log('login with return url fired');
      this.router.navigate(['/login', { returnUrl: window.location.pathname }])//, { queryParams: { returnUrl: state.url }});
      return false;

    }
  }


}

