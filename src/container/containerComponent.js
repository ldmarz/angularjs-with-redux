
class containerComponentController {
  constructor() {
    'ngInject';
  }
}

export const containerComponent = {
  template: require('./containerComponent.html'),
  controller: containerComponentController,
};
