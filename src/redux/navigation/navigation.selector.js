import { createSelector } from 'reselect';

const selectNavigation = state => state.navigation;

export const selectNavigationVisibility = createSelector(
  [selectNavigation],
  navigation => navigation.isVisible
);
