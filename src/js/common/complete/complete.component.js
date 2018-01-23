const CompleteComponent = {
  template: `
    <div>Completed Task List!</div>
    <button ng-click="$ctrl.goHome()">Home</button>
    `,
  controller: class {
    constructor($state) {
      'ngInject';

      this.$state = $state;
    }
    goHome() {
      this.$state.go('entry');
    }
  },
};

export default CompleteComponent;
