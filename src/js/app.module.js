import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import ngRedux from 'ng-redux';

import AppComponent from './app.component';

import ComponentsModule from './components/components.module';
import CommonModule from './common/common.module';

// Redux related imports
import RootReducer from './reducers';

const AppModule = angular.module('pam', [
  uirouter,
  ngRedux,

  ComponentsModule,
  CommonModule,
])
  .component('app', AppComponent)
  .config(($urlRouterProvider, $locationProvider, $ngReduxProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/entry');
    $locationProvider.html5Mode(true);

    // create the root store using ng-redux
    $ngReduxProvider.createStoreWith(RootReducer);
  })
  .name;

export default AppModule;
