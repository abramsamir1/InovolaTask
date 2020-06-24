import axios from 'axios';
import {
  FETCH_ATTEMP,
  FETCH_ATTEMP_SUCCESS,
  FETCH_ATTEMP_FAILURE
  } from './types.js';

export const fetchDataAction = () => {
return (dispatch) => {
    dispatch({ type: FETCH_ATTEMP });
    axios.get('https://run.mocky.io/v3/3a1ec9ff-6a95-43cf-8be7-f5daa2122a34')
    .then(response => fetchSuccess(dispatch, response.data))
    .catch(() => fetchFailed(dispatch));
  };
};

const fetchSuccess = (dispatch, data) => {
  dispatch({
  type: FETCH_ATTEMP_SUCCESS,
  payload: data,
});
};

const fetchFailed = (dispatch) => {
  dispatch({
  type: FETCH_ATTEMP_FAILURE
});
};
