import { ResultsService } from './../services/results.service';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router/';


import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'detailedresult',
  templateUrl: './detailedresult.component.html',
  styleUrls: ['./detailedresult.component.css']
})
export class DetailedresultComponent implements OnInit {
data: any;
restaurantDb: any;
@Input() restaurant: any;
    constructor(
      private route: ActivatedRoute,
      private service: ResultsService,
      private router: Router) { 
      
    }

  ngOnInit() {
    console.log('detailed results fired');
    this.route.params.subscribe(params => {
      this.restaurant = JSON.parse(params['restaurant']);
      console.log(this.restaurant);
      
      this.service.getReservations(this.restaurant.R.res_id)
      .subscribe(restaurantDb => {
        this.restaurantDb = restaurantDb
        console.log(restaurantDb, 'restDB');
      }) 
      
   });
    
  }
  join(id) {
    if(localStorage.token){
      this.service.join(id)
      .subscribe(result => {
        alert('you joined the list')
        
      }, error => {
        this.router.navigate([`/login`]);
      })
    }
    else {
      this.router.navigate([`/login`]);
      
    }
  }

    
}

