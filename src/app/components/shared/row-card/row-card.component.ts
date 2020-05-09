import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IIncomeBymonth, IExpense } from 'src/app/interfaces';
import { ProvidergqlService } from 'src/app/services/providergql.service';

interface Iprop extends IIncomeBymonth, IExpense {
  __typename: string
}

@Component({
  selector: 'app-row-card',
  templateUrl: './row-card.component.html',
  styleUrls: ['./row-card.component.css']
})
export class RowCardComponent implements OnInit {
  @Input() data_card: Iprop
  @Output() closeEmit: EventEmitter<any>

  constructor(
    private providergqlService: ProvidergqlService
  ) {
    this.closeEmit = new EventEmitter()
  }

  ngOnInit() { }

  close(): void {
    this.data_card = null
    if (!this.data_card) this.closeEmit.emit(this.data_card);
  }

  deleteItem(): void {
    if (this.data_card['__typename']! in this.data_card) throw new Error("it has happened a erro,_typename does'nt")
    try {
      if (this.data_card.__typename === "Expenses") {
        delete this.data_card.__typename;
        this.providergqlService.deleteExpenses(this.data_card).subscribe(data => {
          data ? this.close() : alert('it has happened a error');
        });
      } else {
        delete this.data_card.__typename;
        this.providergqlService.deleteIncomes(this.data_card).subscribe(data => {
          data ? this.close() : alert('it has happened a error');
        });
      }
    } catch (err) {
      throw new Error(err)
    }
  }
}
