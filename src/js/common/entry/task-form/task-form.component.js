import angular from 'angular';
import uniqid from 'uniqid';

const TaskFormComponent = {
  bindings: {
    onTaskAdd: '&',
  },
  template: `
    <p>P.A.M. Overview</p>

    <form ng-submit="$ctrl.addTask()" novalidate>
      <input type="text" name="name" ng-model="$ctrl.task.name" placeholder="name"/>
      <input type="number" name="duration" ng-model="$ctrl.task.duration" placeholder="in mins..."/>
      <input type="submit" value="Add"/>
    </form>

  `,
  controller: class {
    constructor() {
      'ngInject';
    }
    $onInit() {
      this.task = {
        id: null,
        name: null,
        duration: null,
      };
    }
    addTask() {
      this.task.id = uniqid();
      this.onTaskAdd({ task: angular.copy(this.task) });

      this.task = {
        id: null,
        name: null,
        duration: null,
      };
    }
  },
};

export default TaskFormComponent;
