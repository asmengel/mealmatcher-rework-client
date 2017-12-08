import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {
// use redirect here to node js get 301 instead of 200 
  constructor() { }

  ngOnInit() {
  }

}
