import React from 'react';
import Cart from '../Cart/Cart';

const Header = (props) => {
    const {totalPrice, cart} = props;
    return (
        <div>
            <h1 className="text-center">Build Your Company Team Member</h1>
            <h4>Total Budget: {totalPrice}৳, Total Member: {cart.length}</h4>
        </div>
    );
};

export default Header;