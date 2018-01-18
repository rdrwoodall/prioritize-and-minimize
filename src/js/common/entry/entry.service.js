import uniqid from 'uniqid';

export default class EntryService {
  constructor() {
    'ngInject';

    this.taskList = [
      {
        name: 'My first task',
        duration: 1,
        id: uniqid(),
      },
      {
        name: 'My second task',
        duration: 5,
        id: uniqid(),
      },
      {
        name: 'My third task',
        duration: 3,
        id: uniqid(),
      },
    ];
  }
  getTasks() {
    // TODO: maybe setup something with JSON Server
    return this.taskList;
  }
  addTask(task) {
    this.taskList = [...this.taskList, task];
    return this.taskList;
  }
  deleteTaskById(taskId) {
    this.taskList = this.taskList.filter(task => task.id !== taskId);
    return this.taskList;
  }
  deleteTasks() {
    this.taskList = [];
    return this.taskList;
  }
  getNextTask() {
    return this.taskList.shift();
  }
}
