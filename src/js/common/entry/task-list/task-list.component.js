const TaskListComponent = {
  bindings: {
    taskList: '<',
    onTaskDelete: '&',
  },
  template: `
    <h3>Task List:</h3>
    <table class="table table-bordered">
      <tr>
        <th>name</th>
        <th>duration</th>
        <th>action</th>
      </tr>
      <tr ng-repeat="task in $ctrl.taskList">
        <td>{{task.name}}</td>
        <td>{{task.duration}}</td>
        <td>
          <button ng-click="$ctrl.deleteTask(task.id)">delete</button>
        </td>
      </tr>
    </table>
    <h4>End</h4>
  `,
  controller: class {
    constructor() {
      'ngInject';
    }
    $onChanges(changes) {
      if (changes.taskList && !changes.taskList.isFirstChange()) {
        this.taskList = [...changes.taskList.currentValue];
      }
    }
    deleteTask(taskId) {
      this.onTaskDelete({ taskId });
    }
  },
};

export default TaskListComponent;
