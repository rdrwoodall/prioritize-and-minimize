import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import CompleteComponent from './complete.component';

const CompleteModule = angular.module('complete', [
  uirouter,
])
  .component('complete', CompleteComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state({
        name: 'complete',
        url: '/complete',
        component: 'complete',
      });
  })
  .name;

export default CompleteModule;
