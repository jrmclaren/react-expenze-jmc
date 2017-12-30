import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../Actions/expenses';
import ExpenseForm from './ExpenseForm';


// Refactor to class based component 
// setup mapDispatchToProps ( editExpense, startRemoveExpense ) => dispatch

export class EditExpensePage extends React.Component {
  constructor(props) {
    super(props);
  }
  startRemoveExpense = e => {
    this.props.startRemoveExpense({
      id: this.props.expense.id
    });
    this.props.history.push('/');
  }
  startEditExpense = expense => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
				<ExpenseForm
      expense={this.props.expense}
      onSubmit={this.startEditExpense}
      />
			<button  onClick={this.startRemoveExpense}>Remove</button> 
		</div>
      );
  }
}
const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: expense => dispatch(startRemoveExpense(expense))
})
const mapStateToProps = (state, props) => {
  return {
    expense: ( state.expenses.find(expense => expense.id === props.match.params.id) )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);


