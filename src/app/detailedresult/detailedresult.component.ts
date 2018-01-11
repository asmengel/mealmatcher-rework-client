import { ResultsService } from './../services/results.service';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

import { Component, OnInit, Input} from '@angular/core';
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

@Input() restaurant: any;
    constructor(
      private route: ActivatedRoute,
      private service: ResultsService,
      private router: Router) { 
      
    }

  ngOnInit() {
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //console.log('detailed results fired');
    this.route.params.subscribe(params => {
      this.restaurant = JSON.parse(params['restaurant']);
      console.log('this restaurant', this.restaurant);
      this.seeGuests(this.restaurant);
      })
      
      
  }
  seeGuests(data) {
    let res = this.service.seeGuests(data.id)
    .subscribe(res => {
      console.log('see guests', res)
      this.reservations = res.UsersInterested
    }, 
      error => {
        if(error instanceof NotFoundError){
          this.reservations = null;
          console.log('this is where we should be doing something to post');
        }
        else {
          alert('unhandled error')
        }
        console.log('error', error);
      })
      console.log('past response', res);
      
    
      
      
      
    
    
  }
  join(id) {
    
    if(localStorage.getItem('token')){
      const rest = {
        
        RestaurantId: this.restaurant.id,
        RestaurantName: this.restaurant.name,
        RestaurantAddress: this.restaurant.location,
      }

      console.log('local storage present');
      this.service.join(id, rest)
      .subscribe(result => {
        alert('you joined the list')
        
      }, error => {
        console.log(error);
        this.router.navigate([`/login`, {returnUrl: window.location.pathname}]);
      })
    }
    else {
      console.log('login with return url fired');
      this.router.navigate(['/login', {returnUrl: window.location.pathname}])//, { queryParams: { returnUrl: state.url }});
      return false;
      
    }
  }

    
}

