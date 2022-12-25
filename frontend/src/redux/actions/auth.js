import { AUTH, START_LOADING, END_LOADING } from '../constants/actionTypes';
import * as api from '../../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    dispatch({ type: END_LOADING });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
    
    dispatch({ type: END_LOADING });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};