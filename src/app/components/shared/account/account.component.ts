import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IExpense, IIncomeBymonth } from 'src/app/interfaces';

interface IstatusData {
  incomes: Array<IIncomeBymonth>
  expenses: Array<IExpense>
}
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() private dataMonth: IstatusData;
  @Output() private refreshRequest: EventEmitter<boolean>;
  public load: boolean = false
  data_row: IExpense & IIncomeBymonth = null

  constructor() {
    this.refreshRequest = new EventEmitter()
  }

  ngOnInit() {
  }

  getData(): IstatusData {
    return this.dataMonth && this.dataMonth
  }

  private resetClass(): void {
    Array.from(document.querySelectorAll('tbody > tr ')).forEach((item: HTMLElement) => {
      item.style.border = 'none'
    })
  }

  handleClick(tr: HTMLElement, item: IExpense): void {
    this.resetClass();
    tr.style.border = '2px rgb(7, 163, 168) solid ';
    this.data_row = item
  }

  closeCard(event): void{
    this.data_row = event;
    this.refreshRequest.emit(false) // emit card child => acounts => slider... refreshRequest and data
  }
}