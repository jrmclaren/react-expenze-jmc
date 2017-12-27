import React from 'react';
import numeral from 'numeral';
import { selectExpensesTotal } from '../Selectors/expenses-total';
const ExpensesSummary = props => {
  let expenses = props.expenses;
  if (!expenses[0]) {
    return <p>No expenses</p>
  }
  return expenses.length == 1 ? (
    (<p>You are viewing 1 expense with a total of {numeral(expenses[0].amount / 100).format('$0,0.00')}</p>)
    ) : (
    (<p>{`You are viewing ${expenses.length} expenses with a total of ${numeral(selectExpensesTotal(expenses) / 100).format('$0,0.00')}`}</p>)
    )
}
export default ExpensesSummary;