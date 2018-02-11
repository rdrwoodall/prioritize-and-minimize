import angular from 'angular';

const TimerComponent = {
  bindings: {
    duration: '<',
    onComplete: '&',
  },
  template: `
    <div>{{ $ctrl.minutes }} : {{ $ctrl.seconds }}</div>
  `,
  controller: class {
    constructor($scope, $interval) {
      'ngInject';

      this.$scope = $scope;
      this.$interval = $interval;
    }
    $onInit() {
      this.$scope.$on('toggle', angular.bind(this, this.onToggle));

      this.minutes = this.duration;
      this.seconds = 0;
      this.timer = this.$interval(angular.bind(this, this.runTimer), 1000);
    }
    onToggle() {
      // timer is currently stopped, run timer
      if (this.timer === null) {
        this.timer = this.$interval(angular.bind(this, this.runTimer), 1000);
        return;
      }

      // timer is currently running, stop timer
      this.$interval.cancel(this.timer);
      this.timer = null;
    }
    runTimer() {
      // timer complete
      if (this.minutes === 0 && this.seconds === 0) {
        this.cancelTimer();

        if (this.onComplete) {
          this.onComplete();
        }
      }

      // update timer
      this.minutes = (this.seconds === 0) ? (this.minutes - 1) : this.minutes;
      this.seconds = (this.seconds - 1) < 0 ? 59 : (this.seconds - 1);
    }
    cancelTimer() {
      this.$interval.cancel(this.timer);
      this.timer = null;
    }
  },
};

export default TimerComponent;
