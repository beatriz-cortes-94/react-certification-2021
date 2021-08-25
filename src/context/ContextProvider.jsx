/* eslint-disable no-unused-vars */
import React, {
  createContext,
  useReducer,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import reducer from './Reducer';
import { AUTH_STORAGE_KEY, AUTH_USER } from '../utils/constants';
import { storage } from '../utils/storage';

const initialState = {
  query: 'wizeline',
  results: null,
  clickedVideo: null,
  isLightTheme: true,
  isAuthenticated: false,
  userInfo: null,
  favorites: [],
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

  const updateAuthentication = useCallback((isLogin, userInfo) => {
    const updateAction = {
      type: 'UPDATE_AUTHENTICATION',
      payload: isLogin,
      info: userInfo,
    };
    dispatch(updateAction);
  }, []);

  const updateFavorites = useCallback((video) => {
    const updateAction = {
      type: 'UPDATE_FAVORITES',
      payload: video,
    };
    dispatch(updateAction);
  }, []);

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);
    const userInfo = storage.get(AUTH_USER);
    updateAuthentication(isAuthenticated, userInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    isAuthenticated: state.isAuthenticated,
    updateAuthentication,
    favorites: state.favorites,
    updateFavorites,
  };

  return <AppContext.Provider value={value}> {children} </AppContext.Provider>;
};

export default ContextProvider;
