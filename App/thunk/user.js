import {setCurrentUser} from '../actions/user';
import {sendRequest} from '../services/api';

export const login = params => async dispatch => {
  console.log(params);
  const path = 'v1/login';

  try {
    const res = await sendRequest('post', path, params);
    const {user, token} = res.data;
    dispatch(
      setCurrentUser({
        authenticated: true,
        data: user,
      }),
    );
    return user;
  } catch (err) {
    console.log(err);
  }
};
