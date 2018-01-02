import { ResultsService } from './../services/results.service';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router/';


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
checker: any;
returnUrl: string;

@Input() restaurant: any;
    constructor(
      private route: ActivatedRoute,
      private service: ResultsService,
      private router: Router) { 
      
    }

  ngOnInit() {
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log('detailed results fired');
    this.route.params.subscribe(params => {
      this.restaurant = JSON.parse(params['restaurant']);
      console.log(this.restaurant);
      })
     
      
  }
  seeGuests(data) {
    console.log(data);
    
  }
  join(id) {
    
    if(localStorage.getItem('token')){
      console.log('local storage present');
      this.service.join(id)
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

