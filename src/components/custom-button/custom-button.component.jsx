import React from 'react';
import classnames from 'classnames';

import './custom-button.styles.scss';

const CustomButton = ({ children, className, type }) => {
  const blockClass = 'custom-button';
  const customButtonClass = classnames(className, blockClass, {
    [`${blockClass}--${type}`]: type === 'inverse',
    [`${blockClass}--${type}`]: type === 'blue',
  });

  return <button className={customButtonClass}>{children}</button>;
};

export default CustomButton;
