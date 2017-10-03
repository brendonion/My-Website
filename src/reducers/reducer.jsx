import { combineReducers } from 'redux';
import * as ActionTypes from '../constants/actionTypes.jsx';
import * as ReducerTypes from '../constants/reducerTypes.jsx';

const genericRequest = (state = {
  isFetching: false,
  data: [],
  length: -1,
  success: false,
  errorMessage: [],
  totalPages: 0,
  currentPage: 0,
}, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        success: false,
      })
    case ActionTypes.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        success: true,
        data: (action.appendData) ? state.data.concat(action.data) : action.data,
        length: action.length,
        totalPages: action.totalPages,
        currentPage: action.currentPage,
      })
    case ActionTypes.ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        errorMessage: action.errorMessage,
      })
    default: return state
  }
}

const createReducer = (reducerFunction, reducerName) => {
  return (state, action) => {
    const { name } = action;
    const isInitializationCall = state === undefined;
    if (name !== reducerName && !isInitializationCall) return state;
    return reducerFunction(state, action);
  }
}

const rootReducer = combineReducers({
  [ReducerTypes.LOGIN]: createReducer(genericRequest, ReducerTypes.LOGIN),
});

export default rootReducer;
