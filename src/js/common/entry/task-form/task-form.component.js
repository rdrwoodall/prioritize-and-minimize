import uniqid from 'uniqid';

import TaskActions from '../../../actions/tasks.actions';

const TaskFormComponent = {
  template: `
    <p>P.A.M. Overview</p>

    <form ng-submit="$ctrl.add()" novalidate>
      <input type="text" name="name" ng-model="$ctrl.task.name" placeholder="name"/>
      <input type="number" name="duration" min="1" ng-model="$ctrl.task.duration" placeholder="in mins..."/>
      <input type="submit" value="Add"/>
    </form>

  `,
  controller: class {
    constructor($ngRedux) {
      'ngInject';

      // this component just triggers actions and does not contain any state
      // so passing null for mapStateToTarget argument
      this.unsubscribe = $ngRedux.connect(null, TaskActions)(this);
    }

    $onInit() {
      this.task = {
        id: null,
        name: null,
        duration: null,
      };
    }

    $onDestroy() {
      this.unsubscribe();
    }

    add() {
      this.task.id = uniqid();
      this.addTask(this.task);

      this.task = {
        id: null,
        name: null,
        duration: null,
      };
    }
  },
};

export default TaskFormComponent;
