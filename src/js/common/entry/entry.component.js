const EntryComponent = {
  template: `
    <task-form
      on-task-add="$ctrl.processTaskAdd(task)">
    </task-form>
    <div>task-list-component</div>
    <button ui-sref="run">Run</button>
    <button>Clear Tasks</button>
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
  },
};

export default EntryComponent;
