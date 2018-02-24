import uniqid from 'uniqid';

import TASKS from '../constants/tasks';

const initialState = [
  {
    id: uniqid(),
    name: 'My first task',
    duration: 1,
  },
];

export default function (state = initialState, action) {
  switch (action.type) {
    case TASKS.ADD_TASK:
      return [...state, action.payload];
    case TASKS.REMOVE_TASK: {
      const taskIndex = state.findIndex(task => task.id === action.payload);

      return [
        ...state.slice(0, taskIndex),
        ...state.slice(taskIndex + 1),
      ];
    }
    case TASKS.REMOVE_ALL_TASKS:
      return [];
    default:
      return state;
  }
}
