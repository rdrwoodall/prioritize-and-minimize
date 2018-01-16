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
        name: null,
        duration: null,
      };
    }
    addTask() {
      this.onTaskAdd({ task: angular.copy(this.task) });
    }
  },
};

export default TaskFormComponent;
