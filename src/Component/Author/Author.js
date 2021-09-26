import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Details from '../Details/Details';

const Author = () => {
    const[cards, setCard] =useState([]);
    const[cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>setCard(data));

    },[]);

    const handleAddToCart = (author)=>{
        // console.log(author.name)
        const newCart = [...cart,author]
        setCart(newCart)

    }
    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    <div className="row row-cols-1 row-cols-md-3 g-4 container">
                        
                        {
                  cards.map(card=> <Details 
                    key={card.name}
                    card={card}
                    handleAddToCart={handleAddToCart}
                    ></Details>)
                }
                   </div>
                </div>
                <div className="col-md-4 border container">
                    <Cart cart={cart}></Cart>
                </div>
                
            </div>
           
        </div>
    );
};

export default Author;