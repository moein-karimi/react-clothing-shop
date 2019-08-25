import React from 'react';

import SHOP_DATA from './shop.date';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  state = {
    collections: SHOP_DATA
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionsProps }) => (
          <CollectionPreview
            key={id}
            {...otherCollectionsProps}
          ></CollectionPreview>
        ))}
      </div>
    );
  }
}

export default ShopPage;
