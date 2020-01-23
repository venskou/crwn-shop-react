import OverlayActionTypes from './overlay.types';

export const setOverlayVisibility = isVisible => ({
  type: OverlayActionTypes.SET_OVERLAY_VISIBILITY,
  payload: isVisible,
});
