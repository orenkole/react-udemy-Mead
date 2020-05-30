import React from 'react';
import ConnectedExpenseList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesList from './ExpensesList';

const ExpenceDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpensesList />
  </div>
);

export default ExpenceDashboardPage;