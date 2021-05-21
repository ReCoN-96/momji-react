/* eslint-disable react/prop-types */
import React, { createContext } from 'react';
import useRequest from '../hooks/useRequest';

const IntervenantContext = createContext();

const IntervenantProvider = ({ children, baseUrl }) => {
  const state = useRequest(baseUrl);
  return <IntervenantContext.Provider value={state}>{children}</IntervenantContext.Provider>;
};

export { IntervenantContext, IntervenantProvider };
