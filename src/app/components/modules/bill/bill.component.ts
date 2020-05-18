import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: []
})
export class BillComponent implements OnInit {

  constructor(
    private router: Router,
    private HttpService: HttpService
  ) {
    this.HttpService = HttpService
  }

  ngOnInit() {
    this.HttpService.token()
  }
}
