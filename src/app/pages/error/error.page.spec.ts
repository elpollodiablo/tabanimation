import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPage } from './error.page';
import { ActivatedRoute } from '@angular/router';
import { convertToParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

export class ActivatedRouteMock {
  public snapshot = {
    paramMap: convertToParamMap({ 
      'return_to':'/some_route',
      'error_id':'some_error_id'
    })
  }
}

describe('ErrorPage', () => {
  let component: ErrorPage;
  let fixture: ComponentFixture<ErrorPage>;
  let route: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: new ActivatedRouteMock(),
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should also create', () => {
    expect(component).toBeTruthy();
  });
  it('should have unknown error', () => {
    expect(component.error.title).toBe('Unknown error some_error_id');
  });
  it('should set return_to via ActivatedRoute', () => {
    expect(component.return_to).toBe('/some_route');
  });
  it('should set error_id', () => {
    expect(component.error_id).toBe('some_error_id');
  });
});
