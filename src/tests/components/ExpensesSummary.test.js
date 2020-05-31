import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary
    expensesCoun={1}
    expensesTotal={235}
  />);
  expect(wrapper).toMatchSnapshot();
})

test('should render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary
    expensesCoun={23}
    expensesTotal={34543245645}
  />);
  expect(wrapper).toMatchSnapshot();
})