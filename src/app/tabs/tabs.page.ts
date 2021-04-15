import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  tab_registry={};
  tabs = [];
  active_tab_name: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public nav: NavController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter () {
    console.log("TabsPage paramMap", this.route.snapshot.paramMap);
  }

  navigate = (where, something) => {
    this.nav.navigateForward([`/tabbed/${where}/${something}`]);
  }
}
