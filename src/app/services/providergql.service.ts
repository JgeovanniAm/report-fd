import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { IExpense, IIncomeBymonth } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProvidergqlService {

  constructor(
    private apollo: Apollo,
  ) { }
  createExpense(item: IExpense):Observable<Object>{
    return this.apollo.mutate({
      mutation: gql` 
        mutation createExpense($expense: ExpenseInput!) {
          newExpense(expense: $expense) {
            title
            CRC
            date
          }
        }
        `,
      variables: {
        expense: item
      }
    })
  }
  createIncomeBymonth(item: IIncomeBymonth):Observable<Object>{
    return this.apollo.mutate({
      mutation: gql` 
        mutation createNewIncomeByMonth($income: IncomeByMonthinput!) {
          newIncomeByMonth(income: $income) {
            title
            CRC
            descript
            type
          }
        }
        `,
      variables: {
        income: item
      }
    })
  }
}
