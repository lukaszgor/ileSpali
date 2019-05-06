import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css']
})
export class MockComponent implements OnInit {

Pali=[
  {
    pb:'4,7',
    oil:'5',
    lpg:'2,20'
  }
];





  constructor() { }

  ngOnInit() {
  }

}
