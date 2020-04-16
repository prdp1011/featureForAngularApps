import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  constructor() { }
  routePath = [];
  ngOnInit() {
    this.routePath = [
      {path: '/lists', name: 'Lists'},
      {path: '/form', name: 'Dynamic Form'},
      {path: '/virtual-scroll', name: 'Virtual Scroll'}
      // {path: '', name: ''},
      // {path: '', name: ''},
      // {path: '', name: ''},
      // {path: '', name: ''},
      // {path: '', name: ''},
      // {path: '', name: ''},
      // {path: '', name: ''}
    ];

  }

}
