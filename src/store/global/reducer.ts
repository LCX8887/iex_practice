import { Action } from 'src/types';
const initialState = {};

const globalReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default globalReducer;
