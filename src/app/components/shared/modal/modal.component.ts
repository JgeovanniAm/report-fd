import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Imodal } from '../../../interfaces';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() displayModal: boolean;
  @Input() message: Imodal;
  @Output() closeModalEventEmit: EventEmitter<boolean>;

  constructor() {
    this.closeModalEventEmit = new EventEmitter()
  }

  ngOnInit() {
  }

  close(): void {
    this.displayModal = false;
    this.closeModalEventEmit.emit(this.displayModal)
  }
}
