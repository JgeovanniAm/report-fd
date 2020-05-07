import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IExpense, IIncomeBymonth } from 'src/app/interfaces';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() displayAlert: boolean;
  @Input() item: IExpense | IIncomeBymonth;
  @Output() closeAlertEventEmit: EventEmitter<boolean>;
  constructor() { 
    this.closeAlertEventEmit = new EventEmitter()
  }

  ngOnInit() {
  }

  close(): void {
    this.displayAlert = false;
    this.closeAlertEventEmit.emit(this.displayAlert)
  }
}
