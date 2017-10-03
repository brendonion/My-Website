import axios from 'axios';
import { request, success, error } from './genericActions.jsx';
import * as ReducerTypes from '../constants/reducerTypes.jsx';

export const login = (email, password) => (dispatch) => {
  dispatch(request(ReducerTypes.LOGIN));
  // axios request...
  dispatch(success(ReducerTypes.LOGIN, true));
}
