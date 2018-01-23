import angular from 'angular';

const RunComponent = {
  template: `
    <h3>{{$ctrl.task.name}}</h3>
    <timer 
      duration="$ctrl.task.duration" 
      on-complete="$ctrl.onTimerComplete()"
      pause-registration="$ctrl.registerPause(handler)">
    </timer>
    <button ng-click="$ctrl.pause()">Pause</button>
    <button ng-click="$ctrl.goToNext()">Skip</button>
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
      this.pauseHandler = null;
    }
    pause() {
      if (this.pauseHandler) {
        this.pauseHandler();
      }
    }
    goToNext() {
      this.$state.go(this.$state.current, {}, { reload: true });
    }
    goHome() {
      this.$state.go('entry');
    }
    onTimerComplete() {
      this.goToNext();
    }
    registerPause(handler) {
      this.pauseHandler = handler;
    }
  },
};

export default RunComponent;
