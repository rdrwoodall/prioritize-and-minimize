const EntryComponent = {
  template: `
    <div>task-form-component</div>
    <div>task-list-component</div>
    <button ui-sref="run">Run</button>
    <button>Clear Tasks</button>
  `,
  controller: class {
    constructor() {
      'ngInject';

      this.taskList = [];
    }
    $onInit() {
      console.log('EntryComponent initialized!', this.taskList);
    }
  },
};

export default EntryComponent;
