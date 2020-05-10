import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-panel-dashboard',
  templateUrl: './panel-dashboard.component.html',
  styleUrls: ['./panel-dashboard.component.css']
})
export class PanelDashboardComponent implements OnInit {
  @Input() public showPanel: boolean;
  @Output() private closePanelEventEmit: EventEmitter<boolean>;
  public formState: string = 'expense';

  constructor() {
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

  closePanel(): void {
    this.closePanelEventEmit.emit(!this.showPanel)
  }
}
