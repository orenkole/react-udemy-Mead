// import { createStore } from 'redux';

import { createStore } from "redux"

const incrementCount = ({incrementBy = 1} = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy // same as incrementBy: incrementBy
  }
}
const decrementCount = ({decrementBy = 1} = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy
  }
}
const resetCount = () => {
  type: 'RESET'
}
const setCount = ({count}) => {
  type: 'SET',
  count
}
// Reducers
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.incrementBy };
    case 'SET':
      return {
        count: action.count
      }
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return { count: state.count - decrementBy };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

const store = createStore(countReducer);

store.dispatch(incrementCount());
console.log(store.getState());