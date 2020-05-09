import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Imodal, IExpense, EnumType, IIncomeBymonth } from 'src/app/interfaces';
import { ProvidergqlService } from 'src/app/services/providergql.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-panel',
  templateUrl: './form-panel.component.html',
  styleUrls: ['./form-panel.component.css']
})
export class FormPanelComponent implements OnInit {
  @Input() public formState: string
  public displayModal: boolean = false;
  public displayAlert: boolean = false;
  public typeItem = EnumType;
  public item: IExpense | IIncomeBymonth;
  public load = false;
  public message: Imodal = {
    title: 'form incompleted',
    description: 'please fill the fields of the form'
  };

  constructor(
    private router: Router,
    private providergqlService: ProvidergqlService,
  ) {
    this.providergqlService = providergqlService
  }

  ngOnInit() { }

  handleSubmit(form: FormGroup): void {
    let { topic, description, expenseElem, titleElem, dateinput } = form.value;
    if (form.valid) {
      this.load = true // active load
      const item = { // items to push 
        type: topic,
        descript: description,
        CRC: expenseElem.toString(),
        title: titleElem,
        date: new Date(dateinput)
      }
      this.formState === "expense" ? this.createExpen(item) : this.createIncome(item);
    } else this.displayModal = true;
    form.reset()
  }

  private createExpen(item: IExpense): void {
    this.providergqlService.createExpense(item).subscribe((result: IExpense) => {
      this.load = false;
      result ? this.processActionAlert(result) : this.displayModal = true;
    });
  }

  private createIncome(item: IIncomeBymonth): void {
    this.providergqlService.createIncomeBymonth(item).subscribe((result: IIncomeBymonth) => {
      this.load = false;
      result ? this.processActionAlert(result) : this.displayModal = true;
    });
  }

  private processActionAlert(result: IIncomeBymonth) {
    this.displayAlert = true;
    this.item = result;
  }

  closeAlert(event: boolean): void {
    this.displayAlert = event;
  }

  closeModal(event: boolean): void { // change state from child component
    this.displayModal = event;
  }
}