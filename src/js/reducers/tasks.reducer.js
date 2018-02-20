import uniqid from 'uniqid';

import TASKS from '../constants/tasks';

const initialState = [
  {
    name: 'My first task',
    duration: 1,
    id: uniqid(),
  },
];

export default function (state = initialState, action) {
  switch (action.type) {
    case TASKS.ADD_TASK:
      return [...state, action.payload];
    case TASKS.REMOVE_TASK:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ];
    default:
      return state;
  }
}
