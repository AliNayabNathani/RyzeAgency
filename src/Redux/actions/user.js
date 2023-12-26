import { server } from '../store';
import axios from 'axios';

export const registerUser = formData => async dispatch => {
  try {
    dispatch({ type: 'registerRequest' });

    const response = await axios.post(`${server}/user/register`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    dispatch({
      type: 'registerSuccess',
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: 'registerFail', payload: error.message });
  }
};

export const loginUser = (email, password) => async dispatch => {
  try {
    dispatch({ type: 'loginRequest' });

    const { data } = await axios.post(
      `${server}/auth/login`,
      { email, password },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );
    dispatch({ type: 'loginSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'loginFail', payload: error.response.data.message });
  }
};

export const logoutUser = () => async dispatch => {
  try {
    dispatch({ type: 'logoutRequest' });
    const response = await axios.get(`${server}/auth/logout`, {
      withCredentials: true,
    });
    dispatch({ type: 'logoutSuccess', payload: response.data });
  } catch (error) {
    dispatch({ type: 'logoutFail', payload: error.message });
  }
};
