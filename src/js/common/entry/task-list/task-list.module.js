import angular from 'angular';
import TaskListComponent from './task-list.component';

const TaskListModule = angular.module('taskList', [])
  .component('taskList', TaskListComponent)
  .name;

export default TaskListModule;
