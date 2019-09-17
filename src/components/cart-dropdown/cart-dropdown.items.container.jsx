import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import {
  CartItemsContainer,
  EmptyMessageContainer
} from './cart-dropdown.styles';

const CartDropdownItemsContainerH = ({ cartItems }) => (
  <CartItemsContainer>
    {cartItems.length ? (
      cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
    ) : (
      <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
    )}
  </CartItemsContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const CartDropdownItemsContainer = compose(connect(mapStateToProps))(
  CartDropdownItemsContainerH
);

export default CartDropdownItemsContainer;

// export default connect(mapStateToProps)(CartDropdownItemsContainer);
