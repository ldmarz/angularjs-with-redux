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
    console.log(state);
    return {
      currentActive: state.listReducer.currentActive
    };
  }

  goUpIndex() {
    this.removeActive(this.currentActive);
    this.$ngRedux.dispatch({ type: GOUP});
    // this.currentActive++;
    // this.currentActive = Math.min(this.currentActive, this.elements.length);
    this.setActive(this.currentActive);
  }

  setElements(elements) {
    this.$ngRedux.dispatch({ type: ELEMENTS, elements });
  }

  goDownIndex() {
    this.removeActive(this.currentActive);
    this.$ngRedux.dispatch({ type: GODOWN });
    this.setActive(this.currentActive);
  }

  removeActive(index) {
    _.set(this.elements, `${index}.isActive`, false);
  }

  setActive(index) {
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
