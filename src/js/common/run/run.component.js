import angular from 'angular';

const RunComponent = {
  template: `
    // TODO: start here by displaying current running task
    <div>task name and description</div>
    <div>task-timer</div>
    <button ng-click="$ctrl.goHome()">Home</button>
    `,
  controller: class {
    constructor($state, EntryService) {
      'ngInject';

      this.$state = $state;
      this.EntryService = EntryService;
    }
    $onInit() {
      this.task = this.EntryService.getNextTask();
    }
    goHome() {
      this.$state.go('entry');
    }
  },
};

export default RunComponent;
