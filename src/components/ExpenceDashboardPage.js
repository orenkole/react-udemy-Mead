import React from 'react';
import ConnectedExpenseList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const ExpenceDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpensesList />
  </div>
);

export default ExpenceDashboardPage;