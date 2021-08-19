/* eslint-disable no-unused-vars */
import React, { createContext, useReducer, useCallback, useContext } from 'react';
import reducer from './Reducer';

const initialState = {
  query: 'wizeline',
  results: null,
  clickedVideo: null,
  isLightTheme: true,
};

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`You can't use context`);
  }
  return context;
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateQuery = useCallback((query) => {
    const updateAction = {
      type: 'UPDATE_QUERY',
      payload: query,
    };
    dispatch(updateAction);
  }, []);

  const updateResults = useCallback((results) => {
    const updateAction = {
      type: 'UPDATE_RESULTS',
      payload: results,
    };
    dispatch(updateAction);
  }, []);

  const updateClickedVideo = useCallback((video) => {
    const updateAction = {
      type: 'UPDATE_VIDEO',
      payload: video,
    };
    dispatch(updateAction);
  }, []);

  const updateTheme = useCallback(() => {
    const updateAction = {
      type: 'UPDATE_THEME',
    };
    dispatch(updateAction);
  }, []);

  const value = {
    query: state.query,
    updateQuery,
    results: state.results,
    updateResults,
    clickedVideo: state.clickedVideo,
    updateClickedVideo,
    theme: state.isLightTheme,
    updateTheme,
  };

  return <AppContext.Provider value={value}> {children} </AppContext.Provider>;
};

export default ContextProvider;
