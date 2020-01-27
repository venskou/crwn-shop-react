import React from 'react';
import classNames from 'classnames';

import './custom-button.styles.scss';

const CustomButton = ({ children, className, type, ...props }) => {
  const blockClass = 'custom-button';

  const customButtonClass = classNames(className, blockClass, {
    [`${blockClass}--inverse`]: type === 'inverse',
    [`${blockClass}--blue`]: type === 'blue',
  });

  return (
    <button className={customButtonClass} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
