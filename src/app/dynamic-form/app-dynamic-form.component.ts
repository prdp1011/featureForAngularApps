import { Component, OnInit } from '@angular/core';
import { regConfig } from './field.interface';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './app-dynamic-form.component.html',
  styleUrls: ['./app-dynamic-form.component.scss']
})
export class DynamicAppFormComponent implements OnInit {
  regConfig = regConfig;
  constructor() { }

  ngOnInit() {
  }
  submit(e) {
    console.log(e);
  }
}
