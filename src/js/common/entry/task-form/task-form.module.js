import angular from 'angular';
import TaskFormComponent from './task-form.component';

const TaskFormModule = angular.module('taskForm', [])
  .component('taskForm', TaskFormComponent)
  .name;

export default TaskFormModule;
