import { GODOWN, GOUP, ELEMENTS} from '../actions.type';

function actionGoUp() {
  return {
    type: GODOWN
  };
}

function actionGoDown() {
  return {
    type: GOUP
  };
}

function setElements() {
  return {
    type: ELEMENTS
  };
}

export default { actionGoUp, actionGoDown, setElements};
