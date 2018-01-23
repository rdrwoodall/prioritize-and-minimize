import angular from 'angular';
import TimerComponent from './timer.component';

const TimerModule = angular.module('timer', [])
  .component('timer', TimerComponent)
  .name;

export default TimerModule;
