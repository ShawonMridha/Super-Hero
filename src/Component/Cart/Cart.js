import React from 'react';

const Cart = (props) => {
    const{cart} =props;
    let total =0;
    for(const author of cart){
        total = total + author.income;
    }
    return (
        <div>
            <h1>Author Added:{props.cart.length}</h1>
            <br />
            <h2>Total Cost:{total}</h2>
        </div>
    );
};

export default Cart;