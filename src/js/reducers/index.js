import { combineReducers } from 'redux';
import TasksReducer from './tasks.reducer';

const RootReducer = combineReducers({
  tasks: TasksReducer,
});

export default RootReducer;
