import angular from 'angular';

const RunComponent = {
  template: `
    <h3>{{$ctrl.task.name}}</h3>
    <timer 
      duration="$ctrl.task.duration" 
      on-complete="$ctrl.onTimerComplete()">
    </timer>
    <button ng-click="$ctrl.toggle()">{{ $ctrl.action }}</button>
    <button ng-click="$ctrl.goToNext()">Skip</button>
    <button ng-click="$ctrl.goHome()">Home</button>
    `,
  controller: class {
    constructor($scope, $state, EntryService) {
      'ngInject';

      this.$scope = $scope;
      this.$state = $state;
      this.EntryService = EntryService;
    }
    $onInit() {
      const task = this.EntryService.getNextTask();

      if (angular.isUndefined(task)) {
        this.$state.go('complete');
      }

      this.task = task;
      this.action = 'Stop';
    }
    toggle() {
      this.action = (this.action === 'Stop') ? 'Start' : 'Stop';
      this.$scope.$broadcast('toggle');
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
  },
};

export default RunComponent;
