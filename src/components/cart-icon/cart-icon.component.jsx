import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden , itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShopingIcon className="Shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispach => ({
    toggleCartHidden: () => dispach(toggleCartHidden())
});

const mapStateToProps = (state) => ({
    itemCount : selectCartItemsCount(state)
});

export default connect(mapStateToProps , mapDispatchToProps)(CartIcon); 