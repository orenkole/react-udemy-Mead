import { v4 as uuid} from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENCE action generator
// argument - if none, then empty object
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = {description, note, amount, createdAt};
    return database.ref('expenses').push(expense)
      .then((ref) => {dispatch(addExpense({
        id: ref.key,
        ...expense
      }))})
  }
}

// REMOVE_EXPRENSE action generator
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const starRemoveExpense = ({id} = {}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({id}))
    })
  }
}

// EDIT_EXPENCE action generator
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

// 1. fetch all expense data once
// 2. Parse tha data into an array
// 3. Dispatch SET_EXPENCE
export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      dispatch(setExpenses(expenses));
    })
  }
}
