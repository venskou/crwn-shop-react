import React from 'react';
import classNames from 'classnames';

import './form-input.style.scss';

const FormInput = ({ handleChange, label, ...inputProps }) => {
  const labelClass = classNames('form-input__label', {
    'form-input__label--shrink': inputProps.value.length,
  });

  return (
    <div className="form-input">
      <input className="form-input__field" onChange={handleChange} {...inputProps} />
      {label ? <label className={labelClass}>{label}</label> : null}
    </div>
  );
};

export default FormInput;
