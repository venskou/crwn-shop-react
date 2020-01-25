import React from 'react';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, routeName }) => {
  const { path } = useRouteMatch();

  return (
    <section className="collection-preview">
      <h2 className="collection-preview__title">
        <Link to={`${path}/${routeName}`}>{title}</Link>
      </h2>
      <div className="collection-preview__items">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </section>
  );
};

export default CollectionPreview;
