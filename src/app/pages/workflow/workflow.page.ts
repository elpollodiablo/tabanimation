import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Platform, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.page.html',
  styleUrls: ['./workflow.page.scss'],
})
export class WorkflowPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public platform: Platform,
    public storage: Storage,
    public nav: NavController,
  ) {
  }

  ngOnInit () {
    console.debug("WorkflowPage/ngOnInit");
  }

  ngOnDestroy () {
    console.debug("WorkflowPage/ngOnDestroy");
  }

  ngAfterViewInit() {
    console.debug("WorkflowPage/ngAfterViewInit");
  }

  ionViewWillEnter () {
    console.debug("WorkflowPage/ionViewWillEnter");
  }

  ionViewDidEnter () {
    console.debug("WorkflowPage/ionViewDidEnter");
  }

  ionViewWillLeave() {
  }
}
