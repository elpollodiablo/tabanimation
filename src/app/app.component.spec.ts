import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth/auth.service'
import { BehaviorSubject } from 'rxjs';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  let statusBarSpy, splashScreenSpy, platformReadySpy, platformSpy, auth_spy, silent_login_spy, router_spy, menu_spy;
  beforeEach(async(() => {
    statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
    splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });
    silent_login_spy = Promise.resolve();
    auth_spy = jasmine.createSpyObj('AuthService', { try_silent_login: silent_login_spy, logout: jasmine.createSpy() });
    auth_spy.logged_in = new BehaviorSubject(false);
    router_spy = jasmine.createSpyObj('Router', ['navigate']);
    menu_spy = jasmine.createSpyObj('MenuController', ['enable']);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: StatusBar, useValue: statusBarSpy },
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: Platform, useValue: platformSpy },
        { provide: AuthService, useValue: auth_spy },
        { provide: Router, useValue: router_spy },
        { provide: MenuController, useValue: menu_spy },
      ],
    }).compileComponents();
  }))
  it('creates the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  describe('constructor()', () => {
   it('should not try silent login', async () => {
      TestBed.createComponent(AppComponent);
      await platformReadySpy;
      expect(auth_spy.try_silent_login).not.toHaveBeenCalled();
    });
    it('subscribes menu.enable to auth.logged_in', () => {
      TestBed.createComponent(AppComponent);
      expect(menu_spy.enable).toHaveBeenCalledWith(false);
    });
  });
  describe('.initializeApp()', () => {
    it('initializes the app', async () => {
      TestBed.createComponent(AppComponent);
      expect(platformSpy.ready).toHaveBeenCalled();
      await platformReadySpy;
      await silent_login_spy;
      expect(statusBarSpy.styleDefault).toHaveBeenCalled();
      expect(splashScreenSpy.hide).toHaveBeenCalled();
    });
  });
  describe('.logout()', () => {
    let app;
    beforeEach(async() => {
      app = TestBed.createComponent(AppComponent).debugElement.componentInstance;;
      await platformReadySpy;
      app.logout();
    });
    it('calls auth.logout()', () => {
      expect(auth_spy.logout).toHaveBeenCalled();
    });
    it('navigates to /login', () => {
      expect(router_spy.navigate).toHaveBeenCalledWith(['/login']);
    });
  });
  // TODO: add more tests!

});
