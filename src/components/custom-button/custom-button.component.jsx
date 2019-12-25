import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...buttonProps }) => (
  <button
    className={`
    custom-button
    ${isGoogleSignIn ? 'google-sign-in' : ''}
    ${inverted ? 'inverted' : ''}
    `}
    {...buttonProps}
  >
    {children}
  </button>
);

export default CustomButton;
