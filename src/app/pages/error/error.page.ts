import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage implements OnInit {
  error: any;
  error_id: string;
  return_to: string;

  constructor(
    private route: ActivatedRoute,
  ) {
}

  ngOnInit = () => {
    console.debug('ErrorPage/ngOnInit', this.route.snapshot.paramMap);
  }

  ngAfterViewInit() {
  }
}
