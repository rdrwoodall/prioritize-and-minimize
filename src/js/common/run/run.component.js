import TIMER from '../../constants/timer';
import TimerActions from '../../actions/timer.actions';

const startText = 'Start';
const stopText = 'Stop';

const RunComponent = {
  template: `
    <h3>{{$ctrl.task.name}}</h3>
    <timer 
      duration="$ctrl.task.duration" 
      on-complete="$ctrl.onTimerComplete()">
    </timer>
    <button ng-click="$ctrl.toggleTimer($ctrl.timerStatus);">
      <!-- text value not being updated for some reason even though timerStatus state is -->
      {{ ($ctrl.timerStatus === ${TIMER.STOPPED}) ? '${startText}' : '${stopText}' }}
    </button>
    <button ng-click="$ctrl.goToNext()">Skip</button>
    <button ng-click="$ctrl.goHome()">Home</button>
    `,
  controller: class {
    constructor($scope, $state, $ngRedux) {
      'ngInject';

      this.$state = $state;
      this.unsubscribe = $ngRedux.connect(this.mapStateToThis, TimerActions)(this);
    }

    $onInit() {
      /* nothing to do here yet */
    }

    $onDestroy() {
      this.unsubscribe();
    }

    mapStateToThis(state) {
      console.info('state', state, this);
      return {
        timerStatus: state.timerStatus,
      };
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
