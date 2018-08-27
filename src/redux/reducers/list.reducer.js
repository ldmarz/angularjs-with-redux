import { GODOWN, GOUP, ELEMENTS } from '../actions.type';

const initialState = {
  currentActive: 0,
  elements: []
}

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case GODOWN:
      state.currentActive--
      state.currentActive = Math.max(state.currentActive, 0);
      return state;
    case GOUP:
      state.currentActive++
      state.currentActive = Math.min(state.currentActive, state.elements.length);
      console.log(state.currentActive);
      return state;
    case ELEMENTS:
      state.elements = action.elements;
      return state;
    default:
    return state;
  }
}
