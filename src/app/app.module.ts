import { NgModule, Injector, APP_INITIALIZER, PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from "@angular/common";
import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Custom
import { IonicStorageModule } from '@ionic/storage';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ErrorHandler, Inject } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [
  ],
  imports: [
    IonicModule.forRoot(
      {
        mode: 'ios',
      }
    ),
    //BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CameraPreview,
    FilePath,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
