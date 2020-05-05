import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import gql from 'graphql-tag'
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    private apollo: Apollo,
    private HttpService: HttpService
  ) {
    this.HttpService = HttpService
  }

  ngOnInit() {
    this.HttpService.token();
    this.apollo.query({
      query: gql `
        {
          incomeByMonths {
                  title
              }
        }
      `
    }).subscribe(data => {
      console.log(data)
    })
  }
}
