import React from 'react';
import numeral from 'numeral';
import { selectExpensesTotal } from '../Selectors/expenses-total';
import selectExpenses from '../Selectors/expenses';
import { connect } from 'react-redux';

const ExpensesSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
  		<h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
  	</div>
    );
}
const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
};
export { ExpensesSummary }
export default connect(mapStateToProps)(ExpensesSummary);