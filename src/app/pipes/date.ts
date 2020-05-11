import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'dateFormt'
})
export class dateFormt implements PipeTransform {
  transform(date: Date) {
    return moment(date).format('L');
  }
}