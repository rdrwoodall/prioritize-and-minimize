import { combineReducers } from 'redux';
import TasksReducer from './tasks.reducer';
import TimerStatusReducer from './timer.reducer';

const RootReducer = combineReducers({
  tasks: TasksReducer,
  timerStatus: TimerStatusReducer,
});

export default RootReducer;
