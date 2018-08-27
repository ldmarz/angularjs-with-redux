import angular from 'angular';
import {containerComponent} from './container/containerComponent';
import {listComponent} from './listComponent/listComponent';
import mainController from './main/mainController';
import reducers from './redux/reducers/';
import ngRedux from 'ng-redux';
import { combineReducers } from 'redux';

const app = 'app';
require('./styles/styles.css')

angular
  .module(app, [ngRedux])
  .config(($ngReduxProvider) => {
    let reducer = combineReducers(reducers);
    $ngReduxProvider.createStoreWith(reducer);
  })
  .controller('mainController', mainController)
  .component('containerComponent', containerComponent)
  .component('listComponent', listComponent)
  .run();