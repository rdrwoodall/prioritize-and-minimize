import angular from 'angular';

const RunComponent = {
  template: `
    // TODO: start here by displaying current running task
    <div>task name and description</div>
    <div>task-timer</div>
    <button>Pause</button>
    <button>Skip</button>
    <button ui-sref="entry">Home</button>
    `,
  controller: class {
    constructor(EntryService) {
      'ngInject';

      this.EntryService = EntryService;
    }
    $onInit() {
      this.taskList = this.EntryService.getTasks();
      
      // run taskList somehow
    }
  },
};

export default RunComponent;
