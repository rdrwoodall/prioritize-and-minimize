const EntryComponent = {
  template: `
    <task-form
      on-task-add="$ctrl.processTaskAdd(task)">
    </task-form>
    <task-list
      task-list="$ctrl.taskList"
      on-task-delete="$ctrl.processTaskDelete(taskId)">
    </task-list>
    <button ui-sref="run">Run</button>
    <button ng-click="$ctrl.clearTasks()">Clear Tasks</button>
  `,
  controller: class {
    constructor() {
      'ngInject';
    }
    $onInit() {
      this.taskList = [];
    }
    processTaskAdd(task) {
      this.taskList = [...this.taskList, task];
    }
    processTaskDelete(taskId) {
      this.taskList = this.taskList.filter(task => task.id !== taskId);
    }
    clearTasks() {
      this.taskList = [];
    }
  },
};

export default EntryComponent;
