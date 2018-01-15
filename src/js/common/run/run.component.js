const RunComponent = {
  template: `
    <div>task name and description</div>
    <div>task-timer</div>
    <button>Pause</button>
    <button>Skip</button>
    <button ui-sref="entry">Home</button>
    `,
  controller: class {
    constructor() {
      'ngInject';

      this.task = {};
    }
    $onInit() {
      console.log('RunComponent is initialized!', this.task);
    }
  },
};

export default RunComponent;
