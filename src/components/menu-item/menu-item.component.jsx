import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, match }) => {
  const menuItemClass = classNames('menu-item', {
    [`menu-item--${size}`]: size,
  });

  return (
    <Link className={menuItemClass} to={`${match.url}${linkUrl}`}>
      <img className="menu-item__cover" src={imageUrl} alt={title} />
      <div className="menu-item__content">
        <h2 className="menu-item__title">{title}</h2>
        <p className="menu-item__subtitle">Shop Now</p>
      </div>
    </Link>
  );
};

export default withRouter(MenuItem);
