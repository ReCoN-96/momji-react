/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import requestReducer, { REQUEST_STATUS } from '../reducers/request';
import { GET_ALL_FAILURE, GET_ALL_SUCCESS } from '../actions/request';

const useRequest = (baseUrl) => {
  const [{ records, status, error }, dispatch] = useReducer(requestReducer, {
    status: REQUEST_STATUS.LOADING,
    records: [],
    error: null,
  });

  const signal = React.useRef(axios.CancelToken.source());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await await axios.get(`${baseUrl}`, {
          cancelToken: signal.current.token,
        });
        dispatch({
          type: GET_ALL_SUCCESS,
          records: response.data,
        });
      } catch (e) {
        console.log('Loading data error', e);
        if (axios.isCancel(e)) {
          console.log('Get request canceled');
        } else {
          dispatch({
            type: GET_ALL_FAILURE,
            error: e,
          });
        }
      }
    };
    fetchData();
    return () => {
      console.log('unmount and cancel running axios request');
      signal.current.cancel();
    };
  }, [baseUrl]);

  const propsLocal = {
    records,
    status,
    error,
  };
  return propsLocal;
};

export default useRequest;
