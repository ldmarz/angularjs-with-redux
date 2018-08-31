import triviaData from './trivia.json';
import _ from 'lodash';
import {GOUP, GODOWN, ELEMENTS} from '../redux/actions.type';
import actions from '../redux/actions/list.actions';

class listComponentController {
  constructor($ngRedux) {
    'ngInject';
    this.elements = this.getTriviaData();
    _.head(this.elements).isActive = true;
    this.$ngRedux = $ngRedux;
    this.setElements(this.elements);
    $ngRedux.connect(this.mapStateToThis, actions)(this);
  }

  mapStateToThis(state) {
    return {
      currentActive: state.listReducer.currentActive
    };
  }

  goUpIndex() {
    this.removeActiveClass(this.currentActive);
    this.$ngRedux.dispatch({ type: GOUP});

    this.setActiveClass(this.currentActive);
  }

  setElements(elements) {
    this.$ngRedux.dispatch({ type: ELEMENTS, elements });
  }

  goDownIndex() {
    this.removeActiveClass(this.currentActive);
    this.$ngRedux.dispatch({ type: GODOWN });
    this.setActiveClass(this.currentActive);
  }

  removeActiveClass(index) {
    _.set(this.elements, `${index}.isActive`, false);
  }

  setActiveClass(index) {
    _.set(this.elements, `${index}.isActive`, true);
  }

  getTriviaData() {
    return _.map(triviaData, o => ({trivia: o, "isActive": false})); 
  }
}

export const listComponent = {
  template: require('./listComponent.html'),
  controller: listComponentController,
};
