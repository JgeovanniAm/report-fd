import { Component, OnInit, Input } from '@angular/core';
import { IIncomeBymonth, IExpense } from 'src/app/interfaces';

interface IstatusData {
  incomes: Array<IIncomeBymonth>
  expenses: Array<IExpense>
}

@Component({
  selector: 'app-cal-table',
  templateUrl: './cal-table.component.html',
  styleUrls: ['./cal-table.component.css']
})
export class CalTableComponent implements OnInit {
  @Input() result_byMonth: IstatusData
  constructor() { }

  ngOnInit() {}

  private calculatebyMonth(array: Array<IExpense | IIncomeBymonth>): number {
    if (array.length >= 0) return array.map((item: IExpense) => parseFloat(item.CRC)).reduce((a: number, b: number) => a + b, 0);
    else return 0
  }

  resultBymonth(): number {
    const {incomes, expenses} = this.result_byMonth;
    return Math.abs(this.calculatebyMonth(incomes) - this.calculatebyMonth(expenses));
  }

}
