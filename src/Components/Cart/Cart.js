import React from 'react';
import CartComputerComponent from '../ComputerComponent/CartComputerComponent';

const Cart = (props) => {
    const {cart,  totalPrice} = props;
    console.log(cart)
    return (
        <div className="border rounded">
            <div className="text-center text-white bg-success py-3"><b>{totalPrice}৳</b></div>
            <div className="text-center py-3">{cart.length} Members</div>
            {
                cart.map(cartItem => <CartComputerComponent key={cartItem.id} cartItem={cartItem} />)
            }
            <button className="btn btn-warning mb-3" style={{marginLeft: '30px'}}>Hire Now</button>
        </div>
    );
};

export default Cart;