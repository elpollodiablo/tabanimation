import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  me: any;
  title: any;
  item_type = "homepage";
  item_id = "home"
  constructor (
  ) {
  }
  ngAfterViewInit() {
  }
}
