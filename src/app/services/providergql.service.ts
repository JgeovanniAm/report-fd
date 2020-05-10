import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
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

  createExpense(item: IExpense): Observable<Object> {
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
      },
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',

    })
  }

  deleteExpenses(item: IExpense): Observable<Object> {
    return this.apollo.mutate({
      mutation: gql` 
        mutation deleteExpenses($expense: deleteExpenseinput!) {
          deleteExpense(expense: $expense) {
            title
            CRC
            descript
            type
          }
        }
        `,
      variables: {
        expense: item
      },
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    })
  }

  deleteIncomes(item: IIncomeBymonth): Observable<Object> {
    return this.apollo.mutate({
      mutation: gql` 
        mutation deleteIncomes($income: deleteIncomeByMonth!) {
          deleteIncomeByMonth(income: $income) {
            title
            CRC
            descript
            type
          }
        }
        `,
      variables: {
        income: item
      },
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    })
  }

  createIncomeBymonth(item: IIncomeBymonth): Observable<Object> {
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
      },
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    })
  }
  getAllbyMonth(dateProp: Date): QueryRef<IExpense & IIncomeBymonth> {
    return this.apollo.watchQuery({
      query: gql`
        query getAllbyMonth($date:  DateT!){
          statusMonth(date: $date){
          incomes{
            title
            CRC
            descript
            date
            type
            _id
          }
          expenses{
            title
            CRC
            descript
            date
            type
            _id
          }
        }
        }
        `,
      variables: {
        date: dateProp
      },
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    })
  }
}
