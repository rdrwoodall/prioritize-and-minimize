import TIMER from '../constants/timer';

function toggleTimer(timerState) {
  return {
    type: (timerState === TIMER.RUNNING) ? TIMER.STOP : TIMER.START,
    payload: null,
  };
}

function completeTimer() {
  return {
    type: TIMER.COMPLETE,
    payload: null,
  };
}

export default { toggleTimer, completeTimer };
