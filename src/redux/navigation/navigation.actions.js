import NavigationActionTypes from './navigation.types';

export const setNavigationVisibility = isVisible => ({
  type: NavigationActionTypes.SET_NAVIGATION_VISIBILITY,
  payload: isVisible,
});
