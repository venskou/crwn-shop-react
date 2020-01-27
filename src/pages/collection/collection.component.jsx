import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { selectCollection, selectIsCollectionFetching } from '../../redux/shop/shop.selector';

import { WithSpinner } from '../../components/with-spinner/with-spinner.component';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <section className="collection">
      <h1 className="collection__title">{title}</h1>
      <div className="collection__items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state, ownProps) => ({
  isLoading: selectIsCollectionFetching(state),
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default compose(connect(mapStateToProps), WithSpinner)(CollectionPage);
