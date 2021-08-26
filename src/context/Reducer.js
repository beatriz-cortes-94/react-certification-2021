import { AUTH_STORAGE_KEY, AUTH_USER } from '../utils/constants';
import { storage } from '../utils/storage';

export default (state, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return {
        ...state,
        query: action.payload,
      };
    case 'UPDATE_RESULTS':
      return {
        ...state,
        results: action.payload,
      };
    case 'UPDATE_VIDEO':
      return {
        ...state,
        clickedVideo: action.payload,
      };
    case 'UPDATE_THEME':
      return {
        ...state,
        isLightTheme: !state.isLightTheme,
      };
    case 'UPDATE_AUTHENTICATION':
      storage.set(AUTH_STORAGE_KEY, action.payload);
      if (action.payload) {
        storage.set(AUTH_USER, action.info);
      }
      return {
        ...state,
        isAuthenticated: action.payload,
        userInfo: action.info,
      };
    case 'UPDATE_FAVORITES': {
      // eslint-disable-next-line no-case-declarations
      const copyFavorites = new Map(state.favorites);
      const id = state.clickedVideo.id.videoId;
      if (action.payload) {
        copyFavorites.set(id, state.clickedVideo);
      } else {
        copyFavorites.delete(id);
      }
      return {
        ...state,
        favorites: copyFavorites,
      };
    }
    default:
      return state;
  }
};
