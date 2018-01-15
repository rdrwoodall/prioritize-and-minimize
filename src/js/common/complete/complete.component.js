const CompleteComponent = {
  template: `
    <div>Completed Task List!</div>
    <div>task name and description</div>
    <button ui-sref="entry">Home</button>
    `,
  controller: class {
    constructor() {
      'ngInject';

      this.task = {};
    }
    $onInit() {
      console.log('CompleteComponent is initialized!', this.task);
    }
  },
};

export default CompleteComponent;
