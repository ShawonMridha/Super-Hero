import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const{cart} =props;
    let total =0;
    for(const author of cart){
        total = total + author.income;
    }
    let names = []
    for(const item of cart){
        names.push(item)
    }
    return (
        
        <div>
            <h1>Author Added:{props.cart.length}</h1>
            <br />
            <h2>Total Cost:${total}</h2>
           {
                names.map(name=> <p key={name.id} className="bg-dark text-light rounded text-center w-75">{name.name}</p>)
           }
        </div>
        
    );
};

export default Cart;