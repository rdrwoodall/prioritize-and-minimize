import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import EntryComponent from './entry.component';
import TaskFormModule from './task-form/task-form.module';

const EntryModule = angular.module('taskEntry', [
  uirouter,
  TaskFormModule,
])
  .component('entry', EntryComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state({
        name: 'entry',
        url: '/entry',
        component: 'entry',
      });
  })
  .name;

export default EntryModule;
