import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import { connect } from 'react-redux';
import selectExpenses from '../Selectors/expenses';

export const ExpenseList = props => (
  <div>	
  	{
  props.expenses.length === 0 ? (
    <p>No Expenses </p>	) : (
    props.expenses.map((expense, key) => {
      return ( <ExpenseListItem key={key} {...expense} /> );
    })
    )
  }		
 </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
};

export default connect(mapStateToProps)(ExpenseList);