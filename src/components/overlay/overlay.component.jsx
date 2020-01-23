import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectOverlayVisibility } from '../../redux/overlay/overlay.selector';
import { createStructuredSelector } from 'reselect';
import classnames from 'classnames';

import './overlay.styles.scss';

const Overlay = ({ isOverlayVisible }) => {
  useEffect(() => {
    document.body.style.overflow = isOverlayVisible ? 'hidden' : 'unset';
  }, [isOverlayVisible]);

  const overlayClass = classnames('overlay', {
    'overlay--visible': isOverlayVisible,
  });

  return <div className={overlayClass} onClick={event => event.stopPropagation()} />;
};

const mapStateToProps = () =>
  createStructuredSelector({
    isOverlayVisible: selectOverlayVisibility,
  });

export default connect(mapStateToProps)(Overlay);
