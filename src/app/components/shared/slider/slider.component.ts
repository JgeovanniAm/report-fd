import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { ProvidergqlService } from 'src/app/services/providergql.service';
import { IExpense, IIncomeBymonth } from 'src/app/interfaces';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  private month: Array<string> = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
  private currentYear: number = parseFloat(moment(new Date()).format("YYYY"))
  private currentMonth: number = new Date().getMonth();
  public statusDataMonth: IExpense & IIncomeBymonth;
  public showPanel = false
  public load = false

  constructor(private providergqlService: ProvidergqlService) {
    this.providergqlService = providergqlService
  }

  ngOnInit() {
    this.getStatusMonth()
  }

  handleClickSettings(): void {
    this.showPanel = !this.showPanel
  }

  closePanel(event: boolean): void {
    this.getStatusMonth();
    this.showPanel = event;
  }

  closeCardAccounts(event: boolean): void {
    if (!event) this.getStatusMonth(); // emit card child => acounts => slider... refreshRequest and data
  }

  getStatusMonth(): void {
    this.load = true
    const currentdate: Date = new Date(`${this.currentYear}-${this.currentMonth + 1}-${new Date().getDate()}`)
    this.providergqlService.getAllbyMonth(currentdate).valueChanges
      .subscribe(({ data }: any) => {
        this.load = false
        this.statusDataMonth = data.statusMonth;
      })
  }

  previousDateSlider(): void {
    this.currentMonth === 0 ? this.currentMonth = 11 : this.currentMonth--;
    if (this.currentMonth == 11) this.currentYear -= 1;
    this.getStatusMonth();
  }

  nextDateSlider(): void {
    this.currentMonth === 11 ? this.currentMonth = 0 : this.currentMonth++;
    if (this.currentMonth == 0) this.currentYear += 1;
    this.getStatusMonth();
  }

  getDateSlider(): string {
    return `${this.month[this.currentMonth]} ${this.currentYear}`;
  }
}
