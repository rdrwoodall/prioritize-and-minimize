import TaskActions from '../../../actions/tasks.actions';

const TaskListComponent = {
  template: `
    <h3>Task List:</h3>
    <table class="table table-bordered">
      <tr>
        <th>name</th>
        <th>duration</th>
        <th>action</th>
      </tr>
      <tr ng-repeat="task in $ctrl.tasks">
        <td>{{task.name}}</td>
        <td>{{task.duration}}</td>
        <td>
          <button ng-click="$ctrl.removeTask(task.id)">delete</button>
        </td>
      </tr>
    </table>
    <h4>End</h4>
  `,
  controller: class {
    constructor($ngRedux) {
      'ngInject';

      this.unsubscribe = $ngRedux.connect(this.mapStateToThis, TaskActions)(this);
    }

    $onInit() {
      /* nothing to do here */
    }

    $onDestroy() {
      this.unsubscribe();
    }

    mapStateToThis(state) {
      return {
        tasks: state.tasks,
      };
    }
  },
};

export default TaskListComponent;
