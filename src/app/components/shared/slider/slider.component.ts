import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  public showPanel = false
  private month: Array<string> = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
  private currentYear: number = parseFloat(moment(new Date()).format("YY"))
  private currentMonth: number = new Date().getMonth()

  constructor() { }

  ngOnInit() {
  }

  handleClickSettings(): void {
    this.showPanel = !this.showPanel
  }

  closePanel(event: boolean): void {
    this.showPanel = event
  }

  previousDateSlider(): void {
    this.currentMonth === 0 ? this.currentMonth = 11 : this.currentMonth--;
    if (this.currentMonth == 11) this.currentYear -= 1;
  }

  nextDateSlider(): void {
    this.currentMonth === 11 ? this.currentMonth = 0 : this.currentMonth++;
    if (this.currentMonth == 0) this.currentYear += 1;
  }

  getDateSlider(): string {
    return `${this.month[this.currentMonth]} ${this.currentYear}`;
  }
}
