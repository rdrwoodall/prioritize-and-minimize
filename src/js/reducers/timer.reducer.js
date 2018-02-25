import TIMER from '../constants/timer';

const initialState = TIMER.STATE.STOPPED;

export default function (state = initialState, action) {
  switch (action.type) {
    case TIMER.ACTIONS.START:
      return TIMER.STATE.RUNNING;
    case TIMER.ACTIONS.STOP:
      return TIMER.STATE.STOPPED;
    case TIMER.ACTIONS.END:
      return TIMER.STATE.COMPLETE;
    default:
      return state;
  }
}
