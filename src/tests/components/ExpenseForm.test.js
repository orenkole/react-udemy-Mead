import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

test('should render ExpenseForm correctlry', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
  expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').simulate(
    'submit',
    { preventDefault: () => {} }
  );
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  // submit the change event
  const value = 'New description';
  wrapper.find('input').at(0).simulate(
    'change',
    {target: {value}}
  )
  expect(wrapper.state('description')).toBe(value)
})

test('should set note on textarea change', () => {
  const value = 'New note value';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate(
    'change',
    {target: {value}}
  );
  expect(wrapper.state('note')).toBe(value);
})

test('should set amount if valid input', () => {
  const wrapper = shallow(<ExpenseForm />);
  // submit the amount
  const value = '23.50';
  wrapper.find('input').at(1).simulate(
    'change',
    {target: {value}}
  )
  expect(wrapper.state('amount')).toBe(value)
})

test('should set amount if not valid input', () => {
  const wrapper = shallow(<ExpenseForm />);
  // submit the invalid amount
  const value = '12.222';
  wrapper.find('input').at(1).simulate(
    'change',
    {target: {value}}
  )
  expect(wrapper.state('amount')).toBe('');
})

test('should call onSubmit prop for valid from submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm
    expense={expenses[0]}
    onSubmit={onSubmitSpy}
  />)
  wrapper.find('form').simulate(
    'submit',
    { preventDefault: () => {} }
  );
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenCalledWith(
    {
      description: expenses[0].description,
      amount: expenses[0].amount,
      note: expenses[0].note,
      createdAt: expenses[0].createdAt
    }
  )
})

test('should set new date on date change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const now = moment();
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
})

test('should toggle calendar focused status', () => {
  const wrapper = shallow(<ExpenseForm />);
  const focused = true;
  wrapper.find(SingleDatePicker).prop('onFocusChange')({focused});
  expect(wrapper.state('calendarFocused')).toBe(focused);
})