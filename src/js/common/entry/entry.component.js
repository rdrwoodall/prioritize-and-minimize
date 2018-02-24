import TaskActions from '../../actions/tasks.actions';

const EntryComponent = {
  template: `
    <task-form></task-form>
    <task-list></task-list>
    <button ng-click="$ctrl.goToRun()">Run</button>
    <button ng-click="$ctrl.removeAllTasks()">Clear Tasks</button>
  `,
  controller: class {
    constructor($state, $ngRedux) {
      'ngInject';

      this.$state = $state;
      this.unsubscribe = $ngRedux.connect(this.mapStateToThis, TaskActions)(this);
    }

    $onInit() {
      /* nothing to do here yet */
    }

    $onDestroy() {
      this.unsubscribe();
    }

    mapStateToThis(state) {
      return {
        tasks: state.tasks,
      };
    }

    goToRun() {
      if (this.tasks.length === 0) {
        // TODO: notify user
        console.info('no tasks to run...');
        return;
      }

      this.$state.go('run');
    }
  },
};

export default EntryComponent;
