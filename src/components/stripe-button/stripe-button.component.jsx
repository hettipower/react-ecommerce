import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceFroStripe = price * 100;
    const publishableKey = 'pk_test_BzNqEGTHhCJWSSxms42xHqKS00PG7wgWVt';

    const onToken = token => {
        console.log(token);
        alert('Payment Success');
    }

    return(
        <StripeCheckout
            name="React eCommerce"
            panelLabel="Pay Now"
            label="Pay Now"
            amount={priceFroStripe}
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;