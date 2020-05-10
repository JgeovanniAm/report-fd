import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  private toggle = false
  constructor() { }

  ngOnInit() {
  }

  handleClickLinks(element: HTMLElement): void {
    this.toggle = !this.toggle
    element.className = this.toggle ? "collapse navbar-collapse nav-toggle" : "collapse navbar-collapse";
  }
}
