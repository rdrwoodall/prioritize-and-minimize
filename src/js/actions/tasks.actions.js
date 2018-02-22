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

function removeAllTasks() {
  return {
    type: TASKS.REMOVE_ALL_TASKS,
    payload: null,
  };
}

export default { addTask, removeTask, removeAllTasks };
