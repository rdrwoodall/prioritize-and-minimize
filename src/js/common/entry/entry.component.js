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
    constructor(EntryService) {
      'ngInject';

      this.EntryService = EntryService;
    }
    $onInit() {
      this.taskList = this.EntryService.getTasks();
    }
    processTaskAdd(task) {
      this.taskList = this.EntryService.addTask(task);
    }
    processTaskDelete(taskId) {
      this.taskList = this.EntryService.deleteTaskById(taskId);
    }
    clearTasks() {
      this.taskList = this.EntryService.deleteTasks();
    }
  },
};

export default EntryComponent;
