import { createSelector } from 'reselect';

const selectOverlay = state => state.overlay;

export const selectOverlayVisibility = createSelector(
  [selectOverlay],
  overlay => overlay.isVisible
);
