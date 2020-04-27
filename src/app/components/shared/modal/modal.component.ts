import { Component, OnInit, Input , OnChanges, Output, EventEmitter} from '@angular/core';
import { Imodal } from '../../../interfaces';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() displayModal:boolean;
  @Input() message: {}
  @Output() closeModalEventEmit: EventEmitter<boolean>

  constructor(){
    this.closeModalEventEmit = new EventEmitter()
  }

  ngOnInit() {
    console.log(this.message)
  }

  close():void {
    this.displayModal = false;
    this.closeModalEventEmit.emit(this.displayModal)
  }
}
