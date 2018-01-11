import angular from 'angular';

import AppComponent from './app.component';
import ComponentsModule from './components/components.module';
import CommonModule from './common/common.module';

const AppModule = angular.module('pam', [
  ComponentsModule,
  CommonModule,
])
  .component('app', AppComponent)
  .name;

export default AppModule;
