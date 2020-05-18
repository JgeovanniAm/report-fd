import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})

export class DashboardComponent implements OnInit {

  constructor(
    private HttpService: HttpService
  ) {
    this.HttpService = HttpService
  }

  ngOnInit() {
    this.HttpService.token();
  }
}
