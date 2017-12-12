import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  search(query) {
    let key = "37d84524d8363b1117c5be481d714582"
   let search = {
     q: query,
     apiId: key
   }
  }
  callBack(data) {
    


  }
}
