import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import EntryComponent from './entry.component';

const EntryModule = angular.module('taskEntry', [
  uirouter,
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
