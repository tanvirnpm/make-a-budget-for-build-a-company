import React from 'react';

const CartComputerComponent = (props) => { 
    console.log('cart item',props)
    const {pictureURL,name} = props.cartItem;
    return (
        <div className="cart-item rounded border m-1">
            <div className="row align-items-center">
                <div className="col-3">
                    <img src={pictureURL} alt="" className="img-fluid" />
                </div>
                <div className="col-6">
                    <p style={{fontSize: '10px'}}  className="m-0">{name}</p>
                </div>
                <div className="col-3">
                    <button className="btn btn-danger btn-sm">X</button>
                </div>
            </div>
        </div>
    );
};

export default CartComputerComponent;