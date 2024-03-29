import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, starRemoveExpense } from '../actions/expenses';

export class EditExpancePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onClick = () => {
    this.props.starRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <ExpenseForm
          expense={ this.props.expense }
          onSubmit={this.onSubmit}
        />
        <button
          onClick={this.onClick}
        >Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => (
      expense.id === props.match.params.id
    ))
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  starRemoveExpense: (data) => dispatch(starRemoveExpense(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditExpancePage);