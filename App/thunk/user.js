import {setCurrentUser} from '../actions/user';
import {sendRequest} from '../services/api';

export const login = params => async dispatch => {
  const path = 'api/auth';

  try {
    const res = await sendRequest('post', path, params);
    const {user, token} = res.data;
    dispatch(
      setCurrentUser({
        authenticated: true,
        token: token,
      }),
    );
    return user;
  } catch (err) {
    console.log(err);
  }
};
