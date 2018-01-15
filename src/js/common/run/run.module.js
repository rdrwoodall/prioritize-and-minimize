import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import RunComponent from './run.component';

const RunModule = angular.module('run', [
  uirouter,
])
  .component('run', RunComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state({
        name: 'run',
        url: '/run',
        component: 'run',
      });
  })
  .name;

export default RunModule;
