import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart.action';

import { CartDropdownButton } from './cart-dropdown.styles';

const CartDropdownButtonContainerH = ({ history, dispatch }) => (
  <CartDropdownButton
    onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}
  >
    GO TO CHECKOUT
  </CartDropdownButton>
);

const CartDropdownButtonContainer = compose(
  withRouter,
  connect(null)
)(CartDropdownButtonContainerH);

export default CartDropdownButtonContainer;

// export default withRouter(connect(null)(CartDropdownButtonContainer));
