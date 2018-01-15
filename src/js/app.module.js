import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import AppComponent from './app.component';
import ComponentsModule from './components/components.module';
import CommonModule from './common/common.module';

const AppModule = angular.module('pam', [
  uirouter,
  ComponentsModule,
  CommonModule,
])
  .component('app', AppComponent)
  .config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/entry');
  })
  .name;

export default AppModule;
