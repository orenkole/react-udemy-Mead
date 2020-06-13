import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import {EditExpancePage} from '../../components/EditExpancePage';

let startEditExpense, starRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  starRemoveExpense = jest.fn();
  history = {push: jest.fn()};
  wrapper = shallow(<EditExpancePage
    startEditExpense={startEditExpense}
    starRemoveExpense={starRemoveExpense}
    history={history}
    expense={expenses[2]}
  />);
})

test('should render EditExpansePage', () => {
  expect(wrapper).toMatchSnapshot();
})

test('should handle startEditExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
})
test('should handle starRemoveExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(starRemoveExpense).toHaveBeenLastCalledWith({id: expenses[2].id});
})