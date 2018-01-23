import angular from 'angular';

const RunComponent = {
  template: `
    <h3>{{$ctrl.task.name}}</h3>
    <div>task-timer</div>
    <button ng-click="$ctrl.pause()">Pause</button>
    <button ng-click="$ctrl.skip()">Skip</button>
    <button ng-click="$ctrl.goHome()">Home</button>
    `,
  controller: class {
    constructor($state, EntryService) {
      'ngInject';

      this.$state = $state;
      this.EntryService = EntryService;
    }
    $onInit() {
      const task = this.EntryService.getNextTask();

      if (angular.isUndefined(task)) {
        this.$state.go('complete');
      }

      this.task = task;
      // TODO: start timer
    }
    pause() {
      console.log('pausing', this);
    }
    skip() {
      this.$state.go(this.$state.current, {}, { reload: true });
    }
    goHome() {
      this.$state.go('entry');
    }
  },
};

export default RunComponent;
