import TASKS from '../constants/tasks';

function addTask(task) {
  return {
    type: TASKS.ADD_TASK,
    payload: task,
  };
}

function removeTask(taskId) {
  return {
    type: TASKS.REMOVE_TASKS,
    payload: taskId,
  };
}

function removeAllTasks() {
  return {
    type: TASKS.REMOVE_ALL_TASKS,
    payload: null,
  };
}

export default { addTask, removeTask, removeAllTasks };
