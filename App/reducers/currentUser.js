import {SET_CURRENT_USER} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  token: null,
};

export default (state = initialState, action) => {
  if (action.type === SET_CURRENT_USER) {
    return action.currentUser;
  }
  return state;
};
