const TimerComponent = {
  bindings: {
    duration: '<',
    onComplete: '&',
    // registers a handler to pause internal timer from parent
    pauseRegistration: '&',
  },
  template: `
    <div>{{ $ctrl.minutes }} : {{ $ctrl.seconds }}</div>
  `,
  controller: class {
    constructor($interval) {
      'ngInject';

      this.$interval = $interval;
    }
    $onInit() {
      // register pause handler with parent
      this.pauseRegistration({ handler: this.onPause });

      this.minutes = this.duration;
      this.seconds = 0;
      this.timer = this.$interval(() => {
        if (this.minutes === 0 && this.seconds === 0) {
          this.$interval.cancel(this.timer);

          if (this.onComplete) {
            this.onComplete();
          }
        }

        this.minutes = (this.seconds === 0) ? (this.minutes - 1) : this.minutes;
        this.seconds = (this.seconds - 1) < 0 ? 59 : (this.seconds - 1);
      }, 1000);
    }
    onPause() {
      // TODO: pause timer somehow
      console.log('Timer pause invoked');
    }
  },
};

export default TimerComponent;
