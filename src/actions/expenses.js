import { v4 as uuid} from 'uuid';

// ADD_EXPENCE action generator
// argument - if none, then empty object
export const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    createdAt,
    amount
  }
})
// REMOVE_EXPRENSE action generator
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})
// EDIT_EXPENCE action generator
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})