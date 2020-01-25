import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCollectionsForPreview,
  selectIsCollectionFetching,
} from '../../redux/shop/shop.selector';

import { WithSpinner } from '../with-spinner/with-spinner.component';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = ({ collections }) => (
  <div>
    {collections.map(({ id, ...collectionProps }) => (
      <CollectionPreview key={id} {...collectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
  collections: selectCollectionsForPreview,
});

export default compose(connect(mapStateToProps), WithSpinner)(CollectionsOverview);
