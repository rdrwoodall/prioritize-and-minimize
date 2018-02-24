import TIMER from '../constants/timer';

const initialState = TIMER.RUNNING;

export default function (state = initialState, action) {
  switch (action.type) {
    case TIMER.START:
      return TIMER.RUNNING;
    case TIMER.STOP:
      return TIMER.STOPPED;
    case TIMER.COMPLETE:
      return TIMER.COMPLETE;
    default:
      return state;
  }
}
