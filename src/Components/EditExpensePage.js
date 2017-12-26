import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../Actions/expenses';
import ExpenseForm from './ExpenseForm';


// Refactor to class based component 
// setup mapDispatchToProps ( editExpense, removeExpense ) => dispatch


export class EditExpensePage extends React.Component {
  constructor(props) {
    super(props);
  }
  removeExpense =  e => {
    this.props.removeExpense({
      id: this.props.expense.id
    });
    this.props.history.push('/');
  }
  editExpense = expense => {
    this.props.onSubmit(this.props.expense.id, expense);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
				<ExpenseForm
      expense={this.props.expense}
      onSubmit={this.editExpense}
      />
			<button  onClick={this.removeExpense}>Remove</button> 
		</div>
      );
  }
}
const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: expense => dispatch(removeExpense(expense))
})
const mapStateToProps = (state, props) => {
  return {
    expense: ( state.expenses.find(expense => expense.id === props.match.params.id) )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);


