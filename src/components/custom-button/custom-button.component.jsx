import React from 'react';
import classNames from 'classnames';

import './custom-button.styles.scss';

const CustomButton = ({ children, className, btnStyle, ...props }) => {
  const blockClass = 'custom-button';

  const customButtonClass = classNames(className, blockClass, {
    [`${blockClass}--inverse`]: btnStyle === 'inverse',
    [`${blockClass}--blue`]: btnStyle === 'blue',
  });

  return (
    <button className={customButtonClass} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
