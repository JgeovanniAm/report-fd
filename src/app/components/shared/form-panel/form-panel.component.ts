import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Imodal } from 'src/app/interfaces';

@Component({
  selector: 'app-form-panel',
  templateUrl: './form-panel.component.html',
  styleUrls: ['./form-panel.component.css']
})
export class FormPanelComponent implements OnInit {
  @Input() formState: string
  public displayModal: boolean = false;
  public message: Imodal = {
    title: 'form incompleted',
    description: 'please fill the fields of the form'
  };
  constructor() { }

  ngOnInit() {
    console.log(this.formState)
  }

  handleSubmit(form: FormGroup): void {
    console.log(form.valid)
    if (!form.valid) this.displayModal = true
  }

  closeModal(event: boolean): void { // change state from child component
    this.displayModal = event;
  }
}
