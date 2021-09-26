import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart)
    return (
        <div className="border rounded">
            <div className="text-center text-white bg-success py-3"><b>4575৳</b></div>
            <div className="text-center py-3">{cart.length} items</div>
        </div>
    );
};

export default Cart;