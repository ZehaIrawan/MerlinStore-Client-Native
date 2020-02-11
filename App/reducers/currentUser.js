import {SET_CURRENT_USER} from '../actions/types';

const initialState = {
  authenticated: false,
  data: {},
  token: null,
};

export default (state = initialState, action) => {
  console.log(action);
  if (action.type === SET_CURRENT_USER) {
    return action.currentUser;
  }
  return state;
};
