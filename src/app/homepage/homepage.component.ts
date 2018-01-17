import { ResultsService } from './../services/results.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

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
// search(data: any, input: number) {
//  console.log('you submitted data', data, input)

// }
  search(search, input: number) {
  console.log('search submitted', search, input);
   this.service.geoCode(search)
   .flatMap(response => {
     console.log('flatmap', response)
     return this.service.searchResults(response.results[0].geometry.location.lat, response.results[0].geometry.location.lng, input);
     })
   .subscribe(results => {
     this.router.navigate(['/searchresults', {results: JSON.stringify(results.restaurants)}]);
     console.log('results', results);
     
   })
   
   
  }
}
