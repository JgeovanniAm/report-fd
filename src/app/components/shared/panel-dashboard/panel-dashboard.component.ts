import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-dashboard',
  templateUrl: './panel-dashboard.component.html',
  styleUrls: ['./panel-dashboard.component.css']
})
export class PanelDashboardComponent implements OnInit {
  @Input() public showPanel: boolean;
  @Output() private closePanelEventEmit: EventEmitter<boolean>;

  public formState: string = 'expense';

  constructor(
    private router: Router,
  ) {
    this.closePanelEventEmit = new EventEmitter()
  }

  ngOnInit() { }

  private resetClass(): void {
    Array.from(document.querySelectorAll('.item >  button')).forEach((item: HTMLElement) => {
      item.style.color = "rgb(177, 177, 177)";
    })
  }

  handleClick(e: HTMLElement): void {
    this.resetClass();
    this.formState = e.id;
    e.style.color = "black";
  }

  close(): void {
    this.showPanel = !this.showPanel
    this.closePanelEventEmit.emit(this.showPanel)
  }
}
