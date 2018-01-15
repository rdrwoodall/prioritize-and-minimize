import angular from 'angular';
import EntryModule from './entry/entry.module';
import RunModule from './run/run.module';
import CompleteModule from './complete/complete.module';

const CommonModule = angular.module('pam.common', [
  EntryModule,
  RunModule,
  CompleteModule,
]).name;

export default CommonModule;
