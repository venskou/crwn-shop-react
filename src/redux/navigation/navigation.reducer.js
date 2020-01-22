import NavigationActionTypes from './navigation.types';

const INITIAL_STATE = {
  isVisible: false,
};

const navigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NavigationActionTypes.SET_NAVIGATION_VISIBILITY:
      return {
        ...state,
        isVisible: action.payload,
      };
    default:
      return state;
  }
};

export default navigationReducer;
