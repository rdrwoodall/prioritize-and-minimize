const EntryComponent = {
  template: `
    <task-form
      on-task-add="$ctrl.processTaskAdd(task)">
    </task-form>
    <task-list
      task-list="$ctrl.taskList"
      on-task-delete="$ctrl.processTaskDelete(taskId)">
    </task-list>
    <button ng-click="$ctrl.goToRun()">Run</button>
    <button ng-click="$ctrl.clearTasks()">Clear Tasks</button>
  `,
  controller: class {
    constructor($state, EntryService) {
      'ngInject';

      this.$state = $state;
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
    goToRun() {
      this.$state.go('run');
    }
    clearTasks() {
      this.taskList = this.EntryService.deleteTasks();
    }
  },
};

export default EntryComponent;
