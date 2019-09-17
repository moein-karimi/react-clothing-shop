import React from 'react';

import { CartDropdownContainer } from './cart-dropdown.styles';

import CartDropdownItemsContainer from './cart-dropdown.items.container';
import CartDropdownButtonContainer from './cart-dropdown.button.container';

const CartDropdown = () => (
  <CartDropdownContainer>
    <CartDropdownItemsContainer />
    <CartDropdownButtonContainer />
  </CartDropdownContainer>
);

export default CartDropdown;
