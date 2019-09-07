import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import Favi from '../../assets/crown.svg';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_hDrjlDEPb8jjI7oBK565knwu00QaNpAt05';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="MKT Clothing Ltd."
      billingAddress
      shippingAddress
      image={Favi}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
