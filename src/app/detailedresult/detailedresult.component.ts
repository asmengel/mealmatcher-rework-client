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
import { error } from 'util';

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
  photoUrl: any;


  @Input() restaurant: any;
  constructor(
    private route: ActivatedRoute,
    private service: ResultsService,
    private router: Router,
    private _compiler: Compiler) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.restaurant = JSON.parse(params['restaurant']);
      this.seeGuests(this.restaurant);
      this.showMap(this.restaurant);
      this.google(this.restaurant.location.latitude, this.restaurant.location.longitude)
      this._compiler.clearCache();
    })
  }
// primiming for google places pictures has data just gotta put it in the html
  google(lat, lng) {
    console.log(lat,lng, 'google places stuff');
    this.service.googlePlaces(lat, lng)
      .subscribe(response => {
        
        this.photo = response.results[0].photos[0].photo_reference
        //this.googlePlaces(this.photo)
        this.photoUrl = this.service.getPhotoUrl(this.photo)
        console.log(this.photo, 'google response')
      }, error => {
        // work on this later some crazy errior i believe is related to api
        console.log(error.originalError, 'google error');
      })
  }

  // googlePlaces(reference) {
  //   console.log(reference);
  //   this.service.googlePhoto(reference)
  //   .subscribe(response => {
  //     console.log(response, 'photo respons from google places');
  //   }), error => {
  //     console.log(error);
  //   }

  // }

  coords = [];
  // google maps code
  showMap(data) {
    let lat = Number(data.location.latitude);
    let long = Number(data.location.longitude);
    return this.coords.push(lat) && this.coords.push(long);
  }
// allows the user to see other users who want to eat there or the default banner
  seeGuests(data) {
    let res = this.service.seeGuests(data.id)
      .subscribe(res => {
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
  goBack() {
    window.history.back();
  }
  // checks to see if user is logged in, if so sends call to backend to add them to list
  join(id) {

    if (localStorage.getItem('token')) {
      const rest = {

        RestaurantId: this.restaurant.id,
        RestaurantName: this.restaurant.name,
        RestaurantAddress: this.restaurant.location,
      }

      this.service.join(id, rest)
        .subscribe(result => {
          this.seeGuests(this.restaurant);

        }, error => {
          //console.log(error);
          this.router.navigate([`/login`, { returnUrl: window.location.pathname }]);
        })
    }
    else {
      this.router.navigate(['/login', { returnUrl: window.location.pathname }])
      return false;
    }
  }
}

