import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';
import './Details.css'

const Details = (props) => {
    console.log(props)
    const {name, img, book, age, country, income} = props.card;
    const element = <FontAwesomeIcon icon={faArrowAltCircleRight} />
    return (
        <div className="col">
            <div className="card h-100">
            <img className="small" src={img} alt="" />
            
           <div className="card-body">
           <h4>Name:{name}</h4>
            <h5>Book:{book}</h5>
            <h6>Age:{age}</h6>
            <h4>Countey:{country}</h4>
            <p>Income:{income}</p>
            <button className="btn btn-primary"
            onClick={()=>props.handleAddToCart(props.card)}
            >{element}Add To Cart</button>
           </div>
           </div>
        </div>
    );
};

export default Details;