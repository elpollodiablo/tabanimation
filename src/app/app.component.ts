import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Platform, MenuController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public menu: MenuController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    console.debug('AppComponent/initializeApp');
    return this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.menu.enable(true);
    });
  }
}
