import * as actionType from '../constants/actionTypes';

const authReducer = (state = { isLoading: false, authData: null }, action) => {
  switch (action.type) {
    case actionType.START_LOADING:
      return { ...state, isLoading: true };
    case actionType.END_LOADING:
      return { ...state, isLoading: false };

    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;