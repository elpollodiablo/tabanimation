import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Platform, IonContent } from '@ionic/angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.page.html',
  styleUrls: ['./workflow.page.scss'],
})
export class WorkflowPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  pictureOpts: CameraPreviewPictureOptions = {
    width: 1280,
    height: 1280,
    quality: 85
  }

  cameraPreviewOpts = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'rear',
    tapPhoto: false,
    previewDrag: false,
    tapFocus: false,
    toBack: true,
    alpha: 1,
    storeToFile: true
  }

  constructor(
    private cameraPreview: CameraPreview,
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
    return this.start_camera();
	}

  start_camera = () => {
    this.cameraPreview.startCamera(this.cameraPreviewOpts).then(
      (res) => {
        console.log("camera started");
        console.log("current focus mode", this.cameraPreview.getFocusMode());
        console.log("focus modes", this.cameraPreview.getSupportedFocusModes(), "setting:","FOCUS_MODE_AUTO");
        this.cameraPreview.setFocusMode("auto").then(() => this.cameraPreview.show());
        console.log("init camera", res);
        console.log(res)
      },
      (err) => {
        console.log("init camera error");
        console.log(err)
      });
  }

  ionViewWillLeave() {
    return this.cameraPreview.hide().then(() =>
      this.cameraPreview.stopCamera()).then((res) => {
        console.log("camera stopped", res);
      }).catch((err) => {
        console.log("camera stop error", err);
      })

  }
}
