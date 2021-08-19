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
    default:
      return state;
  }
};
