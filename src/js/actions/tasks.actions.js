import TASKS from '../constants/tasks';

function addTask(task) {
  return {
    type: TASKS.ADD_TASK,
    payload: task,
  };
}

function removeTask(index) {
  return {
    type: TASKS.REMOVE_TASKS,
    payload: index,
  };
}

export default { addTask, removeTask };
