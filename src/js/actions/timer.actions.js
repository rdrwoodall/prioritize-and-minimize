import TIMER from '../constants/timer';

function toggleTimer(timerStatus) {
  const type = (timerStatus === TIMER.STATE.RUNNING)
    ? TIMER.ACTIONS.STOP
    : TIMER.ACTIONS.START;

  return {
    type,
    payload: null,
  };
}

function endTimer() {
  return {
    type: TIMER.ACTIONS.END,
    payload: null,
  };
}

export default { toggleTimer, endTimer };
