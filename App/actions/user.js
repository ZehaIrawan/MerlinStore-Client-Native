import {SET_CURRENT_USER} from './types';

export const setCurrentUser = currentUser => ({
  type: SET_CURRENT_USER,
  currentUser,
});
