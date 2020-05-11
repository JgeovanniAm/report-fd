import { Component, OnInit } from '@angular/core';
import { ProvidergqlService } from 'src/app/services/providergql.service';
import { IIncomeBymonth, IExpense, EnumType } from 'src/app/interfaces';
import { Observable } from 'rxjs';

interface Iprop {
  incomeByMonths: IIncomeBymonth[],
  expenses: IExpense[]
}

@Component({
  selector: 'app-tab-bill',
  templateUrl: './tab-bill.component.html',
  styleUrls: ['./tab-bill.component.css']
})
export class TabBillComponent implements OnInit {
  private getAlldata: Observable<Object> = this.ProvidergqlService.getAllIncomeAndExpense().valueChanges;
  public listTab: string[] = ['earnings', 'saving', 'salary'];
  private typeContent: string = this.listTab[0];
  public resultArrayTab: Iprop | null = null;
  public keyResultArrayTab: string[]
  public load = true

  constructor(private ProvidergqlService: ProvidergqlService) { }

  ngOnInit() {
    this.getResultByTab();
  }

  private resetClassButton(): void {
    Array.from(document.querySelectorAll('.nav-button')).forEach((item: HTMLElement) => {
      item.className = "nav-button";
    })
  }

  private getResultByTab(): any {
    if (this.typeContent === 'earnings') {
      this.getAlldata.subscribe(({ data }: Iprop | any) => {
        this.resultArrayTab = data;
        this.keyResultArrayTab = Object.keys(data.expenses[0]).filter((item) => item !== '__typename' && item !== 'type');
        this.load = false;
      })
    } else if (this.typeContent === 'saving') {
      this.getAlldata.subscribe(({ data }: Iprop | any) => {
        this.resultArrayTab = {
          incomeByMonths: [],
          expenses: data.expenses.filter(item => item.type == EnumType.AHORRO)
        }
        this.load = false;
      })
    } else if (this.typeContent === 'salary') {
      this.getAlldata.subscribe(({ data }: Iprop | any) => {
        this.resultArrayTab = {
          incomeByMonths: data.incomeByMonths.filter(item => item.type == EnumType.SALARIO),
          expenses: []
        }
        this.load = false;
      })
    }
  }

  private getCalTable(array): number {
    if (array.length >= 0) return array.map((item: IExpense) => parseFloat(item.CRC)).reduce((a: number, b: number) => a + b, 0);
    return 0
  }

  handleClickTab(item: HTMLElement): void {
    this.resetClassButton();
    this.typeContent = item.innerHTML;
    item.className = "nav-button active-custom";
    if (typeof this.typeContent === 'string') this.getResultByTab();
  }

  innerResultTable(): number {
    if (this.resultArrayTab) {
      const { incomeByMonths, expenses } = this.resultArrayTab;
      return Math.abs(this.getCalTable(incomeByMonths) - this.getCalTable(expenses));
    } else return 0
  }
}
