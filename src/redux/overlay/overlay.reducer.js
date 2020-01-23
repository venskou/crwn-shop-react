import OverlayActionTypes from './overlay.types';

const INITIAl_STATE = {
  isVisible: false,
};

const overlayReducer = (state = INITIAl_STATE, action) => {
  switch (action.type) {
    case OverlayActionTypes.SET_OVERLAY_VISIBILITY: {
      return {
        ...state,
        isVisible: action.payload,
      };
    }
    default:
      return state;
  }
};

export default overlayReducer;
